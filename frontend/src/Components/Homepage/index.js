import * as React from "react";
import PropTypes from "prop-types";


// Styles
import "../../newCSS/app.css";
import twitterIcon from "../../images/icons/twitter.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import rss from "../../images/icons/rss.svg"
import avatar from "../../images/icons/avatar.svg"
import { Card, Button, Row, Col } from "react-bootstrap";
import TemporaryImg from "../../images/login-background.jpg"

import { useState, useEffect } from "react";
import ajaxService from "../../service/fetchService";
import { useLocalStorage } from "../../util/useLocalStorage";



/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const HomePage = () => {

    const twitterUrl = "https://twitter.com";
    const facebookUrl = "https://www.facebook.com";

    const [pets, setPets] = useState([]);
    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [jwt, setJwt] = useLocalStorage("jwt", "")

    useEffect(() => {

        ajaxService("api/pet/getAll", "get", null, null)
            .then((response) => {
                setPets(response);
            });

    }, []);

    const groupCards = [];

    for (let i = 0; i < pets.length; i = i + cardsPerRow) {
        groupCards.push(pets.slice(i, i + cardsPerRow));
    }


    return (
        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header
                    className="site-head"
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">

                                {/* <img
                                    className="site-logo"
                                    src="banner_73.jpg"
                                    alt="background"
                                /> */}

                            </div>
                            <div className="site-mast-right">
                                {/* {site.twitter && ( */}
                                <a
                                    href={twitterUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={twitterIcon}
                                        alt="Twitter"
                                    />
                                </a>

                                {/* )} */}
                                {/* {site.facebook && ( */}
                                <a
                                    href={facebookUrl}
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={facebookIcon}
                                        alt="Facebook"
                                    />
                                </a>
                                {/* )} */}
                                <a
                                    className="site-nav-item"
                                    href="/postAds"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={rss}
                                        alt="RSS Feed"
                                    />
                                    Post Ads
                                </a>
                                <a
                                    className="site-nav-item"
                                    href="/login"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src={avatar}
                                        alt="RSS Feed"
                                    />
                                    Login
                                </a>
                            </div>
                        </div>

                        <div className="site-banner">
                            <h1 className="site-banner-title">
                                PetCabin
                            </h1>
                            <p className="site-banner-desc">
                                Sen Cheng
                            </p>
                        </div>

                        <nav className="site-nav">
                            <div className="site-nav-left">
                                <a aria-current="page" className="site-nav-item" href="/">Home</a>
                                <a className="site-nav-item" href="/">Dogs</a>
                                <a className="site-nav-item" href="/">Cats</a>
                                <a className="site-nav-item" href="/">Search</a>
                            </div>
                            <div className="site-nav-right">
                                {/* <Link
                                    className="site-nav-button"
                                    to="/about"
                                >
                                    About
                                </Link> */}
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {/* {Mainbody} */}

                    <div style={{ margin: "2em" }}>
                        <div
                            className="d-grid gap-5"
                            style={{ gridTemplateColumns: "repeat(auto-fit, 45rem)" }}>

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
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            {/* <Link to="/">site.title</Link> © 2021 &mdash; */}
                            Published with{" "}
                            <a
                                className="site-foot-nav-item"
                                href="https://ghost.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sen Cheng
                            </a>
                        </div>
                        <div className="site-foot-nav-right">
                            {/* <Navigation
                                data={site.navigation}
                                navClass="site-foot-nav-item"
                            /> */}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
};



export default HomePage;
