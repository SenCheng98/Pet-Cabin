import { useEffect, useState } from "react"
import { useLocalStorage } from "../../util/useLocalStorage"
import ajaxService from "../../service/fetchService"
import { Container, Card, Row, Col } from "react-bootstrap"

import TemporaryImg from "../../images/login-background.jpg"


const PetsView = () => {


    const [jwt, setJwt] = useLocalStorage("jwt", "")
    const [pets, setPets] = useState([]);
    const [cardsPerRow, setCardsPerRow] = useState(3);


    useEffect(() => {

        ajaxService("api/pet", "get", null, jwt)
            .then((response) => {
                setPets(response);
            });

        // const handleResize = () => {

        //     if (window.innerWidth < 576) {
        //         setCardsPerRow(1); // On smaller screens, show one card per row
        //     } else if (window.innerWidth < 1200) {
        //         setCardsPerRow(2); // On medium screens, show two cards per row
        //     } else {
        //         setCardsPerRow(3); // On larger screens, show three cards per row
        //     }
        // }

        // window.addEventListener("resize", handleResize);

        // // Clean up the event listener on component unmount
        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };

    }, []);


    // const groupCards = [];
    // for (let i = 0; i < pets.length; i = i + cardsPerRow) {
    //     groupCards.push(pets.slice(i, i + cardsPerRow));
    // }



    return (

        // <Container>

        //     {groupCards ? (groupCards.map((group, groupIndex) => (

        //         <Row key={groupIndex} className="my-5">
        //             {group.map((card) => (
        //                 <Col key={card.id} xs={12} md={12/cardsPerRow} xl={12/cardsPerRow}>
        //                     <Card style={{ width: '35rem'}} className="mx-auto">
        //                         <Card.Img variant="top" src={TemporaryImg} />
        //                         <Card.Body>
        //                             <Card.Title>{card.breed}</Card.Title>
        //                             <Card.Text>{card.price}</Card.Text>
        //                             <Card.Text>{card.description}</Card.Text>
        //                         </Card.Body>
        //                     </Card>
        //                 </Col>
        //             ))}
        //         </Row>
        //     ))) : (<div></div>)}

        // </Container>

        <div style={{ margin: "2em" }}>
            <div
                className="d-grid gap-5"
                style={{gridTemplateColumns: "repeat(auto-fit, 45rem)"}}>

                {pets ? (pets.map((pet) => (
                    <Card
                        key={pet.id}
                        style={{ width: '35rem' }}
                        className="mx-auto">
                        <Card.Img variant="top" src={TemporaryImg} />
                        <Card.Body>
                            <Card.Title>{pet.breed}</Card.Title>
                            <Card.Text>{pet.price}</Card.Text>
                            <Card.Text>{pet.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))) : (<div></div>)}
            </div>
        </div>
    );
}

export default PetsView;