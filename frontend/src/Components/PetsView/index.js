import { useEffect, useState } from "react"
import { useLocalStorage } from "../../util/useLocalStorage"
import ajaxService from "../../service/fetchService"


const PetsView = () => {


    const[jwt,setJwt] = useLocalStorage("jwt","")

    const[pets,setPets] = useState(null);

    useEffect(() => {
        console.log(pets);

        ajaxService("api/pet", "get", null, jwt)
        .then((response) => {
            setPets(response);
        });

    }, []);

    return(

        <div>Pets posted
            {pets ? (pets.map((pet) => (

                <div key={pet.id}>
                    <div>{pet.breed}</div>,
                    <div>{pet.price}</div>,
                    <div>{pet.description}</div>

                </div>


            ))) : (<div></div>)}

        </div>


    );
}

export default PetsView;