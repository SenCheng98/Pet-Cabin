import * as React from "react";
import "../../newCSS/app.css";
import Mainbody from "../../components/MainBody";
import Nav1 from "../../components/Nav1";
import Banner from "../../components/Banner";
import Nav2 from "../../components/Nav2";
import Footer from "../../components/Footer";


/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const HomePage = () => {



    return (
        <div className="viewport">
            <div className="viewport-top">

                {/* The main header section on top of the screen */}
                <header className="site-head">

                    <div className="container">

                        <div>
                            <Nav1/>
                        </div>

                        <div>
                            <Banner/>
                        </div>

                        <div>
                            <Nav2/>
                        </div>
                    </div>
                </header>

                <main className="site-main">
                    <Mainbody/>
                </main>

            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <Footer/>
            </div>
        </div>
    )
};



export default HomePage;
