import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

//initial State
const initalState = {
    user: null,
};

// Create context
const Context = createContext()

// root reducer
const rootReducer = (state, action) => {
    //action will contient type and payload, payload contient user/data info from back that u want to register uin the state
    switch(action.type) {
        case "LOGIN": 
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

//context provider
const Provider = ({ children }) => {
    // dispatch is always with type and payload so the state is updated
    const [state, dispatch] = useReducer(rootReducer, initalState);

    //router 
    const router = useRouter();

    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.parse(window.localStorage.getItem('user')),
        })
    }, []);

    axios.interceptors.response.use(
        function(response){
            //any status code that lies within 2XX cause this fc to trigger
            return response;
        }, 
        
        function(error) {
            //any tatus code that falses outside the range of 2XX causes this fc to trigger
            let res = error.response;
            if(res.tatus === 401 && res.config && !res.config.__isRetryRequest){
                return new Promise((resolve, reject) => {
                    axios.get("/api/logout")
                    .then((data) => {
                        console.log("/401 error > logout");
                        dispatch({type: "LOGOUT"});
                        window.localStorage.removeItem("user");
                        router.push("/login");
                    })
                    .catch(err => {
                        console.log("AXIOS INTERCEPTORS ERR", err);
                        reject(error);
                    });
                });
            }
            return Promise.reject(error);
        }
);

        //includes token in headers
    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axios.get("/api/csrf-token");
            // console.log("CSRF", data);
            axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
        };
        getCsrfToken();
    }, [])

    return(
        <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
};

export { Context, Provider };