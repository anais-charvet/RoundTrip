import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";

const UserRoute = ({ children }) => {

    const [ok, setOk] = useState(false);
    const router = useRouter();
    

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/api/current-user");
            //console.log(data);
            if (data.ok) setOk(true);
        } catch (err) {
            console.log(err);
            setOk(false);
            router.push("/login");
        }
    };

    //console.log("hidden", hidden);

    return (
        <>
        { !!ok ? ( 
            <SyncOutlined 
                spin 
                className="d-flex justify-content-center display-1 text-primary p5"
            /> 
        ) : (
                <>{children}</>
            )}
        </>
    );
};

export default UserRoute;