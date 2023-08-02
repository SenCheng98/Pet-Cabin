import * as React from "react";
import PropTypes from "prop-types";


// Styles
import "../../newCSS/app.css";
import twitterIcon from "../../images/icons/twitter.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import rss from "../../images/icons/rss.svg"
import avatar from "../../images/icons/avatar.svg"
import { Card, Button, Row, Col} from "react-bootstrap";
import TemporaryImg from "../../images/login-background.jpg"



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

    return <>
        {/* <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet> */}

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

                <Row className="my-3">
                    <Col md={4}>   
                        <Card style={{ width: '40rem' }}>
                            <Card.Img variant="top" src={TemporaryImg} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>   
                        <Card style={{ width: '40rem' }}>
                            <Card.Img variant="top" src={TemporaryImg} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>   
                        <Card style={{ width: '40rem' }}>
                            <Card.Img variant="top" src={TemporaryImg} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>



                    {/* <section className="post-feed">
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>
                        <a className="post-card" href="/">
                            <header className="post-card-header">
                                <div className="post-card-image"></div>
                                <div className="post-card-tags"></div>
                                <h2 className="post-card-title">pet breed</h2>
                            </header>
                            <section className="post-card-excerpt">Description</section>
                            <footer className="post-card-footer">
                                <span></span>
                            </footer>
                        </a>

                    </section> */}
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
    </>;
};



export default HomePage;
