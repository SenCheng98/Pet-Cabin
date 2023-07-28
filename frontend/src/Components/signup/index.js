import React, { Component, useState } from 'react'




const Signup = () => {

    const[fullname,setFullname] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[postcode,setPostcode] = useState("");

    function sendSignupReq() {

        console.log("sending");
        //declare a variable, cannot be changed
        const reqBody = {
            "fullname" : fullname,
            "username" : username,
            "password" : password,
            "email" : email,
            "phone" : phone,
            "postcode" : postcode,
        };
    
        //hashmap, key + value
        fetch("api/auth/sign-up",{
            headers: {
            "Content-Type" : "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if(response.status === 200){
                window.location.href = "/login";
                console.log(response);
                return  Promise.all([response.json(),response.headers]);
            }else{
                return Promise.reject("Please sign up again!");
            } 
        })

    }



    return (

        <div className="auth-wrapper">
            <div className="auth-inner">

                <form>
                    <h3>Sign Up</h3>

                    <div className="mb-3">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Phone number</label>
                        <input
                        type="phone"
                        className="form-control"
                        placeholder="Enter phone"
                        />
                    </div>

                    <div className="d-grid">
                        <button id ="submit" type="button" onClick={() => sendSignupReq()} className="btn btn-primary">
                        Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">login?</a>
                    </p>
                </form>

            </div>
        </div>
        

  );
}

export default Signup;