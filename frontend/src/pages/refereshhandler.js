import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
const RefereshHandler = (setIsAuthenticated) => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if(localStorage.getItem("token")) {
            setIsAuthenticated(True);
            if(location.pathname==="/login"||location.pathname==="/signup"||location.pathname==="/") {
                navigate("/Final",replace(false));
            }
        }
},[]);
    if (!token) {
        navigate("/login");
    }
};
export default RefereshHandler;