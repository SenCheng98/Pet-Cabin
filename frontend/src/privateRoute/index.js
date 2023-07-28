import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../util/useLocalStorage"

const PrivateRoute = ({children}) => {

    const[jwt,setJwt] = useLocalStorage("jwt","");
    return jwt ? children : <Navigate to = "/login"/>;

}

export default PrivateRoute;