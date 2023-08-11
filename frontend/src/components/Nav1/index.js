import * as React from "react";

import { useLocalStorage } from "../../util/useLocalStorage";
import getRolesFromJwt from "../../util/getRolesFromJwt";
import { useState } from "react";
import getUserInfoFromJwt from "../../util/getUserInfoFromJwt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Nav1 = () => {
    const [openedDrawer, setOpenedDrawer] = useState(false)

    const [jwt, setJwt] = useLocalStorage("jwt", "");
    const [roles, setRoles] = useState(getRolesFromJwt(jwt));
    const [username, setUsername] = useState(getUserInfoFromJwt(jwt));

    function toggleDrawer() {
        setOpenedDrawer(!openedDrawer);
    }

    function changeNav(event) {
        if (openedDrawer) {
            setOpenedDrawer(false)
        }
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid" style={{fontSize:25}}>
                    <Link className="navbar-brand" to="/" onClick={changeNav}>
                        <FontAwesomeIcon
                            icon={["fab", "bootstrap"]}
                            className="ms-1"
                            size="lg"
                        />
                        <span className="ms-3 h3">PetCabin</span>
                    </Link>

                    <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to="/petlist" className="nav-link" replace onClick={changeNav}>
                                    Explore
                                </Link>
                            </li>
                        </ul>

                        <div>
                            {
                                jwt ? (
                                    roles.find((role) => role.authority === "ADMIN") ? (
                                        <ul className="navbar-nav me-3 mb-lg-0">
                                            <Link to="/postAds" className="nav-link" replace onClick={changeNav}>
                                                Post Pet
                                            </Link>
                                        </ul>

                                    ) : ("")
                                ) : ("")
                            }
                        </div>


                        <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
                            <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                            <span className="ms-3 badge rounded-pill bg-dark">0</span>
                        </button>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    href="!#"
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                                    {
                                        jwt ? (
                                            <span>Welcome {username}</span>
                                        ) : ("")
                                    }
                                </a>

                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="userDropdown"
                                >
                                    {
                                        jwt ? (
                                            <li>
                                                <a className="dropdown-item" style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setJwt(null);
                                                        window.location.href = "/";
                                                    }}>
                                                    Logout
                                                </a>
                                            </li>
                                        ) : (
                                            <div>
                                                <li>
                                                    <Link to="/login" className="dropdown-item" onClick={changeNav}>
                                                        Login
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/signup" className="dropdown-item" onClick={changeNav}>
                                                        Sign Up
                                                    </Link>
                                                </li>
                                            </div>

                                        )
                                    }

                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="d-inline-block d-lg-none">
                        <button type="button" className="btn btn-outline-dark">
                            <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                            <span className="ms-3 badge rounded-pill bg-dark">0</span>
                        </button>
                        <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Nav1;