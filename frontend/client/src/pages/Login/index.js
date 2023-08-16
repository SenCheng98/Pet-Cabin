import { useState } from "react";
import { useLocalStorage } from "../../util/useLocalStorage";

import './login.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ajaxService from "../../service/fetchService";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const[jwt,setJwt] = useLocalStorage("jwt","");

    console.log(username);
    function sendLoginReq() {

        //declare a variable, cannot be changed
        const reqBody = {
            "username" : username,
            "password" : password,
        };
    
        //hashmap, key + value
        fetch("/myServer/auth/login",{
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
                <Form >
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <h1> Login </h1>
                </div>
            
                    <Form.Group>
                        <Form.Label className="col-form-label-lg  mb-1  fw-bold">Username</Form.Label>
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            size="lg"
                            className="mb-2"

                            value={username}
                            onChange={(event) => setUsername(event.target.value)}/> 
                    </Form.Group>
            
                    <Form.Group>
                        <Form.Label className="col-form-label-lg  mb-1  fw-bold">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            size="lg"
                            className="mb-4"
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)}/>
                    </Form.Group>
            
                    <Form.Group className="mb-3">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`}>
                                <Form.Check // prettier-ignore
                                    type={type}
                                    id={`default-${type}`}
                                    label="Remember me"
                                />
                            </div>
                        ))}
                    </Form.Group>
            
                    <Row >
                        <Button 
                            as="input"
                            value="Login"
                            variant = "primary"
                            size="lg"
                            onClick={() => sendLoginReq()} 
                            >
                        </Button>
                    </Row>

                    <p className="forgot-password text-right">do not have account?
                        <a href="signup">sign up </a>
                    </p>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Form>
            </div>
         </div>

      )

    
}

export default Login;