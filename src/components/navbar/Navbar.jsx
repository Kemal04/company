import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const navbarStyle = {
        background: scrollY > 50 ? "white" : "transparent",
        shadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        transition: "0.3s",
    };

    const navLinkStyle = {
        color: scrollY > 50 ? "black" : "white",
        transition: "0.3s",
        fontSize: '18px',
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
                <div className="container">
                    <Link to='/' className="navbar-brand" style={navLinkStyle}>Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link ms-4 fw-semibold" style={navLinkStyle}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about-us' className="nav-link ms-4 fw-semibold" style={navLinkStyle}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' className="nav-link ms-4 fw-semibold" style={navLinkStyle}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link ms-4 fw-semibold" style={navLinkStyle}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar