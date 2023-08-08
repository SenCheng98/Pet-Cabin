
import { Card, Button, Row, Col } from "react-bootstrap";
import TemporaryImg from "../../images/login-background.jpg"

import { useState, useEffect } from "react";
import ajaxService from "../../service/fetchService";
import { Link } from "react-router-dom";

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