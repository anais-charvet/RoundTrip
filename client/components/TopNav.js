import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {} from "@ant-design/icons";
import { AppstoreOutlined, LoginOutlined, LogoutOutlined, UserAddOutlined, CoffeeOutlined } from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu; //Menu.Item

const TopNav = () => {

    const [current, setCurrent ] = useState("");

    const { state, dispatch } = useContext(Context);
    const { user } = state;

    const router = useRouter();

    useEffect(()=> {
        process.browser && setCurrent(window.location.pathname);
        console.log(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    const logout =  async() => {
        dispatch({type: "LOGOUT"});
        window.localStorage.removeItem("user");
        const data = await axios.get("/api/logout");
        toast(data.message);
        router.push("/login");
    }

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item 
                key="/home" 
                onClick={e => setCurrent(e.key)} 
                icon={<AppstoreOutlined />}
            >
                    <Link href="/">
                        <a>App</a>
                    </Link>
            </Item>

            {user === null && (
                <>
                    <Item 
                        key="/login" 
                        icon={<LoginOutlined />}
                        onClick={e => setCurrent(e.key)} 
                        >
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                    </Item>

                    <Item 
                        key="/register" 
                        icon={<UserAddOutlined />}
                        onClick={e => setCurrent(e.key)} 
                        >
                            <Link href="/register">
                                <a>Register</a>
                            </Link>
                    </Item>
                </>
            )}

            {user !== null && (
                <SubMenu 
                    icon={<CoffeeOutlined/>} 
                    title={user && user.name} 
                    className="top-right"
                >
                <ItemGroup>
                    <Item key="/user">
                        <Link href="/user">
                            <a>Dashbord</a>
                        </Link>
                    </Item>                    
                    <Item 
                            icon={<LogoutOutlined />}
                            onClick={logout}
                            >
                            Logout
                        </Item>
                    </ItemGroup>
                </SubMenu>
            )}

        </Menu>
    )
}

export default TopNav;