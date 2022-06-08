import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router"


const Login = () => {
    const [email, setEmail] = useState("ryan@gmail.com");
    const [password, setPassword] = useState("ryanryan");
    const [loading, setLoading] = useState(false);

    //state
    const { state, dispatch }  = useContext(Context);
    const { user } = state;

    //router
    const router = useRouter()

    useEffect(() => {
        if(user !== null) router.push("/");
    },[user]);
    

    // console.log("STATE", state);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({name, email, password});
        try {
            setLoading(true);
            // const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
            //après target added in server.js
            const { data } = await axios.post(`/api/login`, {
                email,
                password,
            });
            dispatch({
                type: "LOGIN",
                payload: data,
            })
            // console.log("Login response", data);
            // toast("Registration successful. Please login.");

            //save in local storage
            window.localStorage.setItem("user", JSON.stringify(data));

            //then redirect user
            router.push("/");

            // setLoading(false);
    } catch (err){
        toast(err.response.data);
        setLoading(false);
    }
    };

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Login</h1>
            <div className="container col-md-4 offset-md-4 pd-5">
            <form onSubmit={handleSubmit}>

            <input 
                type="email" 
                className="form-control mb-4 p-4" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
            />

            <input 
                type="password" 
                className="form-control mb-4 p-4" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
            />         
            <button type="submit" className="btn w-100 btn-primary"
            disabled={!email || !password || loading}
            >
            {loading ? <SyncOutlined spin /> : "Submit"}
            </button>
            </form>

            <p className="text-center p-3">
                Not registered yet ?{" "}
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </p>

            </div>
        </>
    )
}

export default Login;