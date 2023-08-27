import React, { Component, useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ajaxService from '../../service/fetchService';
import { useLocalStorage } from '../../util/useLocalStorage';



const Application = () => {

  const id = window.location.href.split("/apply/")[1];
  const [jwt, setJwt] = useLocalStorage("jwt", "");

  const [petName, setPetName] = useState("");
  const [homeStatus, setHomeStatus] = useState("");
  const [fisrtTime, setFirstTime] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(id);
    window.location.href = `/petdetail/${id}`;
  }
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  function sendApplyReq() {


    //declare a variable, cannot be changed
    const reqBody = {
      "petname": petName,
      "homestatus": homeStatus,
      "firsttime": fisrtTime,
    };

    ajaxService(`/myServer/apply/${id}`, "post", null, jwt)
      .then((data) => {
        console.log(data);
      })

  }


  return (

    <div className="auth-wrapper">
      <div className="auth-inner">

        <form>
          <h3>Adoption Questionnaire</h3>

          <div className="mb-3">
            <label>Please state the name of the pet you are applying for</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter your answer"
              id='PetName'
              value={petName}
              onChange={(event) => setPetName(event.target.value)} />
          </div>

          <div className="mb-3">
            <label>Is this the only pet you have seen on our website that might be a suitable match for you?</label>
            <Form.Select
              aria-label="Default select example"
              value={fisrtTime}
              onChange={(event) => setFirstTime(event.target.value)}>
              <option>Select your answer</option>
              <option value="1">This is the only pet I've applied for</option>
              <option value="2">I've applied for a couple of pets</option>
              <option value="3">I've seen quite a few dogs on the website that could be suitable</option>
            </Form.Select>
          </div>

          <div className="mb-3">
            <label>Is your home a:</label>
            <Form.Select
              aria-label="Default select example"
              value={homeStatus}
              onChange={(event) => setHomeStatus(event.target.value)}>
              <option>Select your answer</option>
              <option value="1">House</option>
              <option value="2">Bungalow</option>
              <option value="3">Caravan</option>
              <option value="3">Farm</option>
              <option value="3">Boat</option>
              <option value="3">Ground Floor Flat</option>
            </Form.Select>
          </div>

          <div className="mb-3">
            <label>Is your home a:</label>
            <Form>
              {['radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label="Busy - By this we mean a good amount of people coming in and out, maybe loud children or a general 'always on the go' kind of atmosphere"
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label="Moderate"
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label="Quiet - By this we mean very few people coming and going, maybe quiet children, quite a calm, peaceful atmosphere"
                  />
                </div>
              ))}
            </Form>
          </div>


          <div className="d-grid">
            <button id="submit" type="button" onClick={() => { sendApplyReq(); handleShow() }} className="btn btn-primary">
              Apply
            </button>
          </div>
          <p className="forgot-password text-right">
            want to re-consider? <a href="/petlist">pet list</a>
          </p>
        </form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your application has been successfully submitted!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back to the pet page
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>


  );
}

export default Application;