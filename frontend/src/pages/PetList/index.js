import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductH from "./ProductH";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import ajaxService from "../../service/fetchService";

import Pagination from "../../components/Pagination/index";


const categories = [
    "All Products",
    "Phones & Tablets",
    "Cases & Covers",
    "Screen Guards",
    "Cables & Chargers",
    "Power Banks",
];

const brands = ["Apple", "Samsung", "Google", "HTC"];

const manufacturers = ["HOCO", "Nillkin", "Remax", "Baseus"];

function FilterMenuLeft() {
    return (
        <ul className="list-group list-group-flush rounded">
            <li className="list-group-item d-none d-lg-block">
                <h5 className="mt-1 mb-2">Browse</h5>
                <div className="d-flex flex-wrap my-2">
                    {categories.map((v, i) => {
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
                <h5 className="mt-1 mb-1">Brands</h5>
                <div className="d-flex flex-column">
                    {brands.map((v, i) => {
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
                <h5 className="mt-1 mb-1">Manufacturers</h5>
                <div className="d-flex flex-column">
                    {manufacturers.map((v, i) => {
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
                            defaultValue="100000"
                        />
                        <label htmlFor="floatingInput">Min Price</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                            defaultValue="500000"
                        />
                        <label htmlFor="floatingInput">Max Price</label>
                    </div>
                    <button className="btn btn-dark">Apply</button>
                </div>
            </li>
        </ul>
    );
}


const PetList = () => {


    const [viewType, setViewType] = useState({ grid: true });

    function changeViewType() {
        setViewType({
            grid: !viewType.grid,
        });
    }


    const [pets, setPets] = useState([]);
    const [petsNumber, setPetsNumber] = useState(0);

    useEffect(() => {

        ajaxService("api/pet/getAll", "get", null, null)
            .then((response) => {
                console.log(response);
                setPets(response);
                setPetsNumber(response.length)
            });

    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(2);
    const lastPostIndex = postsPerPage * currentPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = pets.slice(firstPostIndex, lastPostIndex);


    return (
        <div className="container mt-5 py-4 px-xl-5">
            <ScrollToTopOnMount />
            <nav aria-label="breadcrumb" className="bg-custom-light rounded">
                <ol className="breadcrumb p-3 mb-0">
                    <li className="breadcrumb-item">
                        <Link
                            className="text-decoration-none link-secondary"
                            to="/petlist"
                            replace
                        >
                            PetList
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Dogs
                    </li>
                </ol>
            </nav>

            {/* <div className="h-scroller d-block d-lg-none">
                <nav className="nav h-underline">
                    {categories.map((v, i) => {
                        return (
                            <div key={i} className="h-link me-2">
                                <Link
                                    to="/petlist"
                                    className="btn btn-sm btn-outline-dark rounded-pill"
                                    replace
                                >
                                    {v}
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </div> */}

            <div className="row mb-3 d-block d-lg-none">
                <div className="col-12">
                    <div id="accordionFilter" className="accordion shadow-sm">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFilter"
                                    aria-expanded="false"
                                    aria-controls="collapseFilter"
                                >
                                    Filter Products
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFilter"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFilter"
                        >
                            <div className="accordion-body p-0">
                                <FilterMenuLeft />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4 mt-lg-3">
                <div className="d-none d-lg-block col-lg-3">
                    <div className="border rounded shadow-sm">
                        <FilterMenuLeft />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="d-flex flex-column h-100">
                        <div className="row mb-3">
                            <div className="col-lg-3 d-none d-lg-block">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    defaultValue=""
                                >
                                    <option value="">All Models</option>
                                    <option value="1">iPhone X</option>
                                    <option value="2">iPhone Xs</option>
                                    <option value="3">iPhone 11</option>
                                </select>
                            </div>
                            <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search products..."
                                        aria-label="search input"
                                    />
                                    <button className="btn btn-outline-dark">
                                        <FontAwesomeIcon icon={["fas", "search"]} />
                                    </button>
                                </div>
                                <button
                                    className="btn btn-outline-dark ms-2 d-none d-lg-inline"
                                    onClick={changeViewType}
                                >
                                    <FontAwesomeIcon
                                        icon={["fas", viewType.grid ? "th-list" : "th-large"]}
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            {
                                (viewType.grid === true) ? (<Product petsData={currentPost} />)
                                    : (<ProductH petsData={currentPost} />)
                            }

                            <Pagination
                                totalPost={pets.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // return (

    //     <div style={{ margin: "2em" }}>
    //         <div
    //             className="d-grid gap-5"
    //             style={{ gridTemplateColumns: "repeat(auto-fit, 45rem)" }}>

    //             {pets ? (pets.map((pet) => (
    //                 <Card
    //                     key={pet.id}
    //                     style={{ width: '35rem' }}
    //                     className="mx-auto">
    //                     <Card.Img variant="top" src={TemporaryImg} />
    //                     <Card.Body>
    //                         <Card.Title>{pet.breed}</Card.Title>
    //                         <Card.Text>{pet.price}</Card.Text>
    //                         <Card.Text>{pet.description}</Card.Text>
    //                     </Card.Body>
    //                 </Card>
    //             ))) : (<div></div>)}
    //         </div>
    //     </div>
    // );
}

export default PetList;