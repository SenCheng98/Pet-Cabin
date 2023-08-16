import React, { Component, useState } from 'react'




const Signup = () => {

    const[fullname,setFullname] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[postcode,setPostcode] = useState("");

    console.log(username)

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
        fetch("myServer/auth/sign-up",{
            headers: {
            "Content-Type" : "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if(response.status === 200){
                window.location.href = "/login";
                console.log(response.json());
            }else{
                return Promise.reject("Please sign up again!");
            } 
        })
        .then((data) => console.log(data))

    }



    return (

        <div className="auth-wrapper">
            <div className="auth-inner">

                <form>
                    <h3>Sign Up</h3>

                    <div className="mb-3">
                        <label>fullname</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Fullname"
                            id='Fullname'
                            value={fullname}
                            onChange={(event) => setFullname(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Username"
                            id='Username'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            id='Password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id='Email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Phone number</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            id='Phone'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}/>
                
                    </div>

                    <div className="mb-3">
                        <label>Postcode</label>
                        <input
                            type="postcode"
                            className="form-control"
                            placeholder="Postcode"
                            id='Postcode'
                            value={postcode}
                            onChange={(event) => setPostcode(event.target.value)}/>
                
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