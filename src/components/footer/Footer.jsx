import { Link } from "react-router-dom"

import tweeter_img from "../../assets/icons/tweeter.svg";
import instagram_img from "../../assets/icons/instagram.svg";
import globe_img from "../../assets/icons/globe.svg";
import facebook_img from "../../assets/icons/facebook.svg";

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <div className="bg-footer text-white py-5 mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="h1">Logo</div>
                        </div>
                        <div className="col-xl-3">
                            <div className="h4 text-primary mb-4">Services</div>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Marketing</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>SEO Service</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Digital market</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Content create</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Find Us</Link>
                        </div>
                        <div className="col-xl-3">
                            <div className="h4 text-primary mb-4">Customer Care</div>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Contact Us</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>About Us</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>News & Articles</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Privacy Policy</Link>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>Terms of Use</Link>
                        </div>
                        <div className="col-xl-3">
                            <div className="h4 text-primary mb-4"><span className="text-white">+993</span> 61 00-00-00</div>
                            <Link to='/' className="text-decoration-none d-block mb-3" style={{ color: "#8ba4b1" }}>youremail@gmail.com</Link>
                            <div className="fs-5" style={{ color: "#506172" }}>123 East 26th Street, Fifth Floor, New York, NY 10011</div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={tweeter_img} alt="" style={{ width: "40px" }} className="me-2" />
                                <img src={instagram_img} alt="" style={{ width: "40px" }} className="me-2" />
                                <img src={globe_img} alt="" style={{ width: "40px" }} className="me-2" />
                                <img src={facebook_img} alt="" style={{ width: "40px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="border-top pt-5 mt-5 text-center" style={{ color: "#8ba4b1", letterSpacing:"1px" }}>
                        © Ähli hukuklary goragly (2023 - {date} )
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer