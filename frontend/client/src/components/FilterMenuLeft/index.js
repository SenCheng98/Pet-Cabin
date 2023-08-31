
import { Link } from "react-router-dom";



function FilterMenuLeft() {

  const categories = [
    "All Products",
    "Phones & Tablets",
    "Cases & Covers",
    "Screen Guards",
    "Cables & Chargers",
    "Power Banks",
  ];
  
  const breeds = ["German Shepherd Dog", "Bulldog", "Dachshund", "Long Hair"];
  
  const types = ["Cat", "Dog", "Others"];

  
  return (
      <ul className="list-group list-group-flush rounded">
          <li className="list-group-item d-none d-lg-block">
              <h5 className="mt-1 mb-2">Types</h5>
              <div className="d-flex flex-wrap my-2">
                  {types.map((v, i) => {
                      return (
                          <Link
                              key={i}
                              to="/petlist"
                              className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2"
                              replace
                          >
                              {v}
                          </Link>
                      );
                  })}
              </div>
          </li>
          <li className="list-group-item">
              <h5 className="mt-1 mb-1">Breeds</h5>
              <div className="d-flex flex-column">
                  {breeds.map((v, i) => {
                      return (
                          <div key={i} className="form-check">
                              <input className="form-check-input" type="checkbox" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                  {v}
                              </label>
                          </div>
                      );
                  })}
              </div>
          </li>

          <li className="list-group-item">
              <h5 className="mt-1 mb-2">Price Range</h5>
              <div className="d-grid d-block mb-3">
                  <div className="form-floating mb-2">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Min"
                          defaultValue="500"
                      />
                      <label htmlFor="floatingInput">Min Price</label>
                  </div>
                  <div className="form-floating mb-2">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Max"
                          defaultValue="1500"
                      />
                      <label htmlFor="floatingInput">Max Price</label>
                  </div>
                  <button className="btn btn-dark">Apply</button>
              </div>
          </li>
      </ul>
  );
}

export default FilterMenuLeft;