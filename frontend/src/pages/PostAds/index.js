import React, { Component, useState } from 'react'
import { useLocalStorage } from '../../util/useLocalStorage';
import { Card, Row, Col, Image } from 'react-bootstrap';
import ajaxService from '../../service/fetchService';
import image from '../../images/banner_73.jpg'
import { Paper, Typography } from '@mui/material';
import { styled } from "@mui/system";
import { useDropzone } from 'react-dropzone';
import { Input } from 'postcss';



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

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });


    const useStyles = styled(() => ({
        dropZoneContainer: {
            height: 300,
            background: "#efefef",
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
        },
    }));
    const classes = useStyles();

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
                        <Paper elevation={3}
                            {...getRootProps()}
                            className={classes.dropZoneContainer}
                            variant="outlined">
                            <input {...getInputProps()}></input>
                            <Typography>
                                Drag and drop some files here, or click to select files
                            </Typography>
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