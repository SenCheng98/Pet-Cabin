import * as React from "react";
import "../../newCSS/app.css";
import twitterIcon from "../../images/icons/twitter.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import rss from "../../images/icons/rss.svg"
import avatar from "../../images/icons/avatar.svg"
import { useLocalStorage } from "../../util/useLocalStorage";
import getRolesFromJwt from "../../util/getRolesFromJwt";
import { useState } from "react";
import getUserInfoFromJwt from "../../util/getUserInfoFromJwt";


const Nav1 = () => {

    const twitterUrl = "https://twitter.com";
    const facebookUrl = "https://www.facebook.com";

    const [jwt, setJwt] = useLocalStorage("jwt", "");
    const [roles, setRoles] = useState(getRolesFromJwt(jwt));
    const [username, setUsername] = useState(getUserInfoFromJwt(jwt));

    console.log(username);
    console.log(roles);


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

                {/* <a
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
                </a> */}

                <div className="d-flex">
                    {
                        jwt ? (
                            roles.find((role) => role.authority === "ADMIN") ? (
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
                            ) : (<div>not ADMIN</div>)
                        ) : (
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
                        )
                    }
                    {jwt && (
                        <a
                            className="d-flex justify-content-end site-nav-item"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setJwt(null);
                                window.location.href = "/";
                            }}>
                            Logout({username})
                        </a>
                    )}

                </div>
            </div>
        </div>



    )
}

export default Nav1;