import React, { Component, useState } from 'react'
import { useLocalStorage } from '../../util/useLocalStorage';

import ajaxService from '../../service/fetchService';



const PostAds = () => {

    const[breed,setBreed] = useState("");
    const[price,setPrice] = useState("");
    const[description,setDescription] = useState("");

    const[jwt,setJwt] = useLocalStorage("jwt","");

    function sendPetInfo() {

        //declare a variable, cannot be changed
        const reqBody = {
            "breed" : breed,
            "price" : price,
            "description" : description,

        };
        
        ajaxService("api/pet/postAds", "post", reqBody, jwt)
        .then((response) => {
            console.log(response);
            if(response){
                window.location.href = "/petsView";
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