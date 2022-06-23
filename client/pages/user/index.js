import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute"

const UserIndex = () => {

    const {
         state: { user }, 
    } = useContext(Context)

    //console.log("hidden", hidden);

    return (
        <UserRoute>
                <h1 className="jumbotron text-center square">
                    <pre>{JSON.stringify(user, null, 4)}</pre>
                </h1>
        </UserRoute>
    );
};

export default UserIndex;