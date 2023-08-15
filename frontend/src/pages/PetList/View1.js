import Image from "./nillkin-case-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({petsData}) {


  
  return (

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3">
      {
        petsData ? (petsData.map((pet) => (
          <div className="col">
            <div className="card shadow-sm">
              <Link to={`/petdetail/${pet.id}`} href="!#" replace>
                <img
                  className="card-img-top bg-dark cover"
                  height="200"
                  alt=""
                  src={Image}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center text-dark text-truncate">
                  {pet.breed}
                </h5>
                <p className="card-text text-center text-muted mb-0">￡{pet.price}</p>
                <div className="d-grid d-block">
                  <button className="btn btn-outline-dark mt-3">
                    <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))) : (<div></div>)
      }

    </div>
  );
}

export default Product;
