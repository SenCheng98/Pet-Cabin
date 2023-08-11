import { Card, Button, Row, Col } from "react-bootstrap";
import TemporaryImg from "../../images/login-background.jpg"

import { useState, useEffect } from "react";
import ajaxService from "../../service/fetchService";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import FeaturePets from "./FeaturePets";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mainbody = () => {


  const [pets, setPets] = useState([]);
  //const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {

    ajaxService("api/pet/getAll", "get", null, null)
      .then((response) => {
        setPets(response);
      });

  }, []);

  // const groupCards = [];

  // for (let i = 0; i < pets.length; i = i + cardsPerRow) {
  //     groupCards.push(pets.slice(i, i + cardsPerRow));
  // }
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            search your pets
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>

      <div>
        <FeaturePets />;
      </div>

      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );

}


export default Mainbody;