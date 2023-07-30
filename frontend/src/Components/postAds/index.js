import React, { Component, useState } from 'react'
import { useLocalStorage } from '../../util/useLocalStorage';




const PostAds = () => {

    const[breed,setBreed] = useState("");
    const[price,setPrice] = useState("");
    const[description,setDescription] = useState("");

    const[jwt,setJwt] = useLocalStorage("jwt","");

    function sendPetInfo() {

        

        console.log("sending");
        //declare a variable, cannot be changed
        const reqBody = {
            "breed" : breed,
            "price" : price,
            "description" : description,

        };
    
        //hashmap, key + value
        fetch("api/pet/postAds",{
            headers: {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${jwt}`,
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if(response.status === 200){
                window.location.href = "/";
                console.log(response.json());
            }else{
                return Promise.reject("Please post again!");
                
            } 
        })
        .then((data) => console.log(data))

    }

    function cancel(){

        window.location.href = "/";

    }



    return (

        <div className="auth-wrapper">
            <div className="auth-inner">

                <form>
                    <h3>Post your pet!</h3>

                    <div className="mb-3">
                        <label>breed</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="enter his/her breed here"
                            id='Breed'
                            value={breed}
                            onChange={(event) => setBreed(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Price</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="enter price here"
                            id='Price'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="put some info here"
                            id='Description'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}/>
                    </div>

                    <div className="d-grid">
                        <button id ="submit" type="button" onClick={() => sendPetInfo()} className="btn btn-primary">
                            Post
                        </button>
                    </div>
                    <div className="d-grid">
                        <button id ="submit" type="button" onClick={() => cancel()} className="btn btn-primary">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>
        </div>
        

  );
}

export default PostAds;