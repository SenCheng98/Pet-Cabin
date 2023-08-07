import * as React from "react";
import "../../newCSS/app.css";
import twitterIcon from "../../images/icons/twitter.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import rss from "../../images/icons/rss.svg"
import avatar from "../../images/icons/avatar.svg"
import { useLocalStorage } from "../../util/useLocalStorage";


const Nav1 = () => {

    const twitterUrl = "https://twitter.com";
    const facebookUrl = "https://www.facebook.com";

    const [jwt, setJwt] = useLocalStorage("jwt", "");
    

    return (
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
                <div
                    className="d-flex justify-content-end site-nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setJwt(null);
                        window.location.href = "/login";
                    }}>
                    Logout
                </div>
            </div>


        </div>



    )
}

export default Nav1;