import { useState } from "react";
import { useLocalStorage } from "../../util/useLocalStorage";


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
            window.location.href = "dashboard";
            });
    }

    return(
        <div>
            <div>
            <label>Username</label>

                {/*event, when some event occurs from keyboard, it'll fire */}
                {/*target.value, event lockdowns the target, and grabs the value */}
            <input 
                id ="username" 
                value={username}  
                onChange={(event) => setUsername(event.target.value)}/> 
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    id ="password" 
                    type="password"
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <div>
                {/* This is how JavaScript handles the function invocation and function reference.*/}
                {/* In onClick={sendLoginReq()}, sendLoginReq() is not a reference to the function but an immediate function call.  */}
                {/* In onClick={() => sendLoginReq()}, () => sendLoginReq() is an arrow function that acts as a function reference. When you use this syntax, you are passing a function to the onClick prop, not invoking it immediately.*/}
                <button id ="submit" type="button" onClick={() => sendLoginReq()}>
                    login
                </button>
            </div>
        </div>
        
        
    );
}

export default Login;