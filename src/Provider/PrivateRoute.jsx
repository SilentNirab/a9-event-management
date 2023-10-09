import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children ;

    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};
PrivetRoute.propTypes = {
    children:PropTypes.object
};

export default PrivetRoute;