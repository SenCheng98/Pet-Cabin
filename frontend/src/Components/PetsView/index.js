import { useEffect, useState } from "react"
import { useLocalStorage } from "../../util/useLocalStorage"
import ajaxService from "../../service/fetchService"
import { Container, Card, Row, Col} from "react-bootstrap"

import TemporaryImg from "../../images/login-background.jpg"


const PetsView = () => {


    const[jwt,setJwt] = useLocalStorage("jwt","")

    const[pets,setPets] = useState([]);
    //const cardsData = useState([]);

    useEffect(() => {
        console.log(pets);

        ajaxService("api/pet", "get", null, jwt)
        .then((response) => {
            setPets(response);
        });

    }, []);

    
    const groupCards = [];
    for(let i=0;i<pets.length;i=i+3){
        groupCards.push(pets.slice(i,i+3));
    }

    return(

        <Container>

            {groupCards ? (groupCards.map((group, groupIndex) => (

                <Row key={groupIndex} className="my-3">
                    {group.map((card) => (
                        <Col key={card.id} xs={12} md={4}>
                            <Card style={{ width: '40rem'}}>
                                <Card.Img variant="top" src={TemporaryImg} />
                                <Card.Body>
                                    <Card.Title>{card.breed}</Card.Title>
                                    <Card.Text>{card.price}</Card.Text>
                                    <Card.Text>{card.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            ))) : (<div></div>)}

        </Container>
        // <div>Pets posted
        //     {pets ? (pets.map((pet) => (

        //         <div key={pet.id}>
        //             <div>{pet.breed}</div>,
        //             <div>{pet.price}</div>,
        //             <div>{pet.description}</div>

        //         </div>


        //     ))) : (<div></div>)}

        // </div>


    );
}

export default PetsView;