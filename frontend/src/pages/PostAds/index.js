import React, { Component, useState } from 'react'
import { useLocalStorage } from '../../util/useLocalStorage';
import { Card, Row, Col, Image } from 'react-bootstrap';
import ajaxService from '../../service/fetchService';
import image from '../../images/banner_73.jpg'
import { Paper, Typography } from '@mui/material';
import { styled } from "@mui/system";
import { useDropzone } from 'react-dropzone';
import './dropzone.css'



const PostAds = () => {

    const [breed, setBreed] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [jwt, setJwt] = useLocalStorage("jwt", "");

    function sendPetInfo() {

        //declare a variable, cannot be changed
        const reqBody = {
            "breed": breed,
            "price": price,
            "description": description,

        };

        ajaxService("api/pet/postAds", "post", reqBody, jwt)
            .then((response) => {
                console.log(response);
                if (response) {
                    window.location.href = "/petsView";
                } else {
                    return Promise.reject("Please post again!");

                }
            })
            .then((data) => console.log(data))

    }

    function cancel() {

        window.location.href = "/";

    }

    /*These are functions returned by the useDropzone hook 
    that provide the necessary props to be spread onto the root element of the dropzone 
    and the input element for handling user interactions.*/

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            const updatedFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            // setFiles(updatedFiles);
            setFiles(prevFiles => [...prevFiles, ...updatedFiles]);
        }
    });

    const CustomPaper = styled(Paper)`
        height: 200px;
        background: #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center; 
    `;


    return (

        <div className="auth-wrapper">
            <div className="auth-inner">

                <form>
                    <h3>Post a pet!</h3>

                    <div className="mb-3">
                        <label>breed</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter his/her breed here"
                            id='Breed'
                            value={breed}
                            onChange={(event) => setBreed(event.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="enter price here"
                            id='Price'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="put some info here"
                            id='Description'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Upload file</label>
                        <Paper elevation={3} {...getRootProps()} className='dropzone-container'>
                            <input {...getInputProps()}></input>
                            {files.length > 0 ? (
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {files.map((file, index) => (
                                        <img
                                            key={index}
                                            src={file.preview}
                                            alt={`Preview ${index}`}
                                            style={{ maxWidth: '100px', maxHeight: '100px', margin: '8px' }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <Typography>
                                    Drag and drop some image files here, or click to select image files
                                </Typography>
                            )}
                        </Paper>
                    </div>


                    <div className="d-grid mb-3">
                        <button id="submit" type="button" onClick={() => sendPetInfo()} className="btn btn-primary">
                            Post
                        </button>
                    </div>
                    <div className="d-grid">
                        <button id="submit" type="button" onClick={() => cancel()} className="btn btn-primary">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>
        </div>


    );
}

export default PostAds;