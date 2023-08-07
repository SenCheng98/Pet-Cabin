
import "../../newCSS/app.css";

const Footer = () => {


    return(
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
    )
}

export default Footer;