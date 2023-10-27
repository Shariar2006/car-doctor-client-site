/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(user?.email){
        return children
    }
    if(loading){
        return <div className="h-[80vh] flex justify-center">
             <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return <Navigate to="/login" replace></Navigate>
};

export default Private;