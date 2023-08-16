import { Link } from "react-router-dom";



const Footer = () => {

    return (
        <footer className="mt-auto py-5 bg-dark">

            <div className="container d-flex flex-column justify-content-sm-end ">
                <h3 className="text-white fs-5">Copyright &copy; Sen Cheng</h3>
                
                <Link
                    className="text-white fs-5"
                    to = "https://github.com/SenCheng98/Pet-Cabin.git"
                >
                    Github is here
                </Link>

            </div>
        </footer>
    );

    // return (
    //     <footer className="site-foot">
    //         <div className="site-foot-nav container">
    //             <div className="site-foot-nav-left">
    //                 {/* <Link to="/">site.title</Link> © 2021 &mdash; */}
    //                 Published with{" "}
    //                 <a
    //                     className="site-foot-nav-item"
    //                     href="https://ghost.org"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Sen Cheng
    //                 </a>
    //             </div>
    //             <div className="site-foot-nav-right">
    //                 {/* <Navigation
    //                 data={site.navigation}
    //                 navClass="site-foot-nav-item"
    //             /> */}
    //             </div>
    //         </div>
    //     </footer>
    // )
}

export default Footer;