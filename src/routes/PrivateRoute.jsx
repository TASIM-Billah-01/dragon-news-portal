import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {myUser,loading} = useContext(authContext);
    // console.log(myUser);
    const pathLocation = useLocation();
    if(loading) {
        return <p>loading...</p>
    }
    if(myUser) {
        return children
    }
    return <Navigate state={pathLocation.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;