import { useEffect, useState } from "react"
import { useLocalStorage } from "../../util/useLocalStorage"



const PetsView = () => {


    const[jwt,setJwt] = useLocalStorage("jwt","")

    const[pets,setPets] = useState(null);

    useEffect(() => {
        console.log(pets);

        fetch("api/pet", {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${jwt}`,
            },
            method: "get",
        })
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }
        })
        .then((response) => setPets(response));
 

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