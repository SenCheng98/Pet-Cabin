import Image from "./nillkin-case-1.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ajaxService from "../../service/fetchService";

function RelatedProduct() {


  const [pets, setPets] = useState([]);

  useEffect(() => {

    ajaxService("/myServer/pet/getAll", "get", null, null)
      .then((response) => {
        console.log(response);
        setPets(response);
      });

  }, []);


  return (
    <div className="container pb-5 px-lg-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
        {
          pets ? (pets.slice(0, 3).map((pet) => (
            <div className="col">
              <div key={pet.id} className="card shadow-sm" >
                {
                  pet.breed && (
                    <img
                      className="card-img-top bg-dark cover"
                      height="240"
                      alt=""
                      src={require(`../../images/${pet.breed}.jpg`)}
                    />
                  )
                }

                <div className="card-body">
                  <h5 className="card-title text-center">{pet.breed}</h5>
                  <p className="card-text text-center text-muted">￡{pet.price}</p>
                  <div className="d-grid gap-2">
                    <Link to={`/petdetail/${pet.id}`} className="btn btn-outline-dark" replace>
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          ))) : (<div></div>)
        }
      </div>
    </div>
  );

}

export default RelatedProduct;
