import { useState } from "react";
import { useLocalStorage } from "../../util/useLocalStorage";

import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const[jwt,setJwt] = useLocalStorage("jwt","");

    console.log(username);
    function sendLoginReq() {

        console.log("sending");
        //declare a variable, cannot be changed
        const reqBody = {
            "username" : username,
            "password" : password,
        };
    
        //hashmap, key + value
        fetch("api/auth/login",{
            headers: {
            "Content-Type" : "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if(response.status === 200)
                return  Promise.all([response.json(),response.headers]);
            else return Promise.reject("Invaild credential");
        })
        .then(([body,headers]) => {
            setJwt(headers.get("authorization"));
            window.location.href = "/";
            });
    }



    {/*event（）, when some event occurs from keyboard, it'll fire */}
    {/*target.value, event lockdowns the target, and grabs the value */}

    {/* This is how JavaScript handles the function invocation and function reference.*/}
    {/* In onClick={sendLoginReq()}, sendLoginReq() is not a reference to the function but an immediate function call.  */}
    {/* In onClick={() => sendLoginReq()}, () => sendLoginReq() is an arrow function that acts as a function reference. When you use this syntax, you are passing a function to the onClick prop, not invoking it immediately.*/}
    
    return (

        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Login</h3>
            
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                        id="username"
                        type="username"
                        value={username}
                        className="form-control"
                        placeholder="Enter username"
                        onChange={(event) => setUsername(event.target.value)}/> 
                
                    </div>
            
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                        id ="password" 
                        type="password"
                        value={password} 
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}/>
                    
                    </div>
            
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                        </div>
                    </div>
            
                    <div className="d-grid">
                        <button id ="submit" type="button" onClick={() => sendLoginReq()} className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        <a href="signup">sign up </a>
                    </p>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>

      )

    
}

export default Login;