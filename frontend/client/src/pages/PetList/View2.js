import Image from "./nillkin-case-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import ajaxService from "../../service/fetchService";

function ProductH({petsData}) {

  return (

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-2">
      {
        petsData ? (petsData.map((pet) => (
          <div className="col">
            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-4">
                  <Link to={`/petdetail/${pet.id}`} replace>
                    <img
                      className="rounded-start bg-dark cover w-100 h-100"
                      alt=""
                      src={Image}
                    />
                  </Link>
                </div>
                <div className="col-8">
                  <div className="card-body h-100">
                    <div className="d-flex flex-column h-100">
                      <h5 className="card-title text-dark text-truncate mb-1">
                        {pet.breed}
                      </h5>
                      <span className="card-text text-muted mb-2 flex-shrink-0">
                        {pet.price}
                      </span>
                      <div className="mt-auto d-flex">
                        <button className="btn btn-outline-dark ms-auto">
                          <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))) : (<div></div>)
      }
    </div>
  );
}

export default ProductH;
