import "../../newCSS/app.css";

const Nav2 = () => {


    return (

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
    )
} 

export default Nav2;