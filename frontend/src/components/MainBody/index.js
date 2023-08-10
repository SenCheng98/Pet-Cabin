import { Card, Button, Row, Col } from "react-bootstrap";
import TemporaryImg from "../../images/login-background.jpg"

import { useState, useEffect } from "react";
import ajaxService from "../../service/fetchService";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
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
                Browse products
              </Link>
            </div>
          </div>
          <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
          <div className="container pb-5 px-lg-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
              {Array.from({ length: 6 }, (_, i) => {
                return <FeatureProduct key={i} />;
              })}
            </div>
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

    return (

        <div style={{ margin: "2em" }}>
            <div
                className="d-grid gap-5"
                style={{ gridTemplateColumns: "repeat(auto-fit, 45rem)" }}>

                {pets ? (pets.map((pet) => (
                    <Card
                        key={pet.id}
                        style={{ width: '35rem' }}
                        className="mx-auto">
                        <Link to={`/petDetails/${pet.id}`}>
                            <Card.Img variant="top" src={TemporaryImg} />
                            <Card.Body>
                                <Card.Title>{pet.breed}</Card.Title>
                                <Card.Text>{pet.price}</Card.Text>
                                <Card.Text>{pet.description}</Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                ))) : (<div></div>)}
            </div>
        </div>

    )

}


export default Mainbody;