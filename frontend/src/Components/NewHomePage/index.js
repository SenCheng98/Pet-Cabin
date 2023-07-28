import * as React from "react";
import PropTypes from "prop-types";


// Styles
import "../../newCSS/app.css";
import twitterIcon from "../../images/icons/twitter.svg"
import facebookIcon from "../../images/icons/facebook.svg"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = () => {
    // const site = data.allGhostSettings.edges[0].node;
    // const twitterUrl = site.twitter
    //     ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    //     : null;
    // const facebookUrl = site.facebook
    //     ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    //     : null;

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
                                        //href={twitterUrl}
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
                                        //href={facebookUrl}
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
                                >PostAds
                                    {/* <img
                                        className="site-nav-icon"
                                        src="/images/icons/rss.svg"
                                        alt="RSS Feed"
                                    /> */}
                                </a>
                                <a
                                    className="site-nav-item"
                                    href="/login"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >LOGIN
                                    {/* <img
                                        className="site-nav-icon"
                                        src="/images/icons/rss.svg"
                                        alt="RSS Feed"
                                    /> */}
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
                                {/* The navigation items as setup in Ghost */}
                                {/* <Navigation
                                    data={site.navigation}
                                    navClass="site-nav-item"
                                /> */}
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
                    {/* {children} */}
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



export default DefaultLayout;
