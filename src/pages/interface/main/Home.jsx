import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import main_banner from '../../../assets/banner/main-banner.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import icon_1 from '../../../assets/icons/1.png'
import icon_2 from '../../../assets/icons/2.png'
import icon_3 from '../../../assets/icons/3.png'
import card_1 from '../../../assets/cards/1.jpg'
import card_2 from '../../../assets/cards/2.png'
import card_3 from '../../../assets/cards/3.png'
import card_4 from '../../../assets/cards/4.png'
import card_5 from '../../../assets/cards/5.png'
import card_6 from '../../../assets/cards/6.png'

const Home = () => {

    const options = {
        type: 'fade',
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    return (
        <>
            <div className='container-fluid px-0'>
                <Splide options={options} hasTrack={false}>
                    <SplideTrack>
                        <SplideSlide>
                            <div className="d-flex align-items-center text-white" style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${main_banner})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh", backgroundSize: "cover" }}>
                                <div className="container">
                                    <button className="btn btn-outline-light text-uppercase fw-semibold btn-sm"><FontAwesomeIcon icon={faPlay} className="me-1" /> Watch Video</button>
                                    <div className="display-5 fw-semibold my-4 w-50">We have a passion in creating new and unique spaces</div>
                                    <p>Travel to the any corner of the world, without going around in circles</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="d-flex align-items-center text-white" style={{ background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${main_banner})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh", backgroundSize: "cover" }}>
                                <div className="container">
                                    <button className="btn btn-outline-light text-uppercase fw-semibold btn-sm"><FontAwesomeIcon icon={faPlay} className="me-1" /> Watch Video</button>
                                    <div className="display-5 fw-semibold my-4 w-50">We have a passion in creating new and unique spaces</div>
                                    <p>Travel to the any corner of the world, without going around in circles</p>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row align-items-end">
                    <div className="col-xl-12">
                        <div className="fs-5">Once you’ve settled on a business</div>
                    </div>
                    <div className="col-xl-6">
                        <div className="h1 mt-4" style={{ width: "80%", lineHeight: "60px" }}>High Performance Services For Multiple Industries.</div>
                    </div>
                    <div className="col-xl-6 text-end">
                        <Link to='' className="btn btn-primary btn-lg px-5 rounded-0">View more</Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="text-center p-5 d-flex flex-column justify-content-center align-items-center me-4 h-100 card-hover">
                            <img src={icon_1} alt="" className="img-fluid mt-5" />
                            <div className="fw-semibold fs-5 mt-3 mb-2">Strategic Planning</div>
                            <div className="text-muted w-75 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="text-center p-5 d-flex flex-column justify-content-center align-items-center me-4 h-100 card-hover">
                            <img src={icon_2} alt="" className="img-fluid mt-5" />
                            <div className="fw-semibold fs-5 mt-3 mb-2">Trades & stocks</div>
                            <div className="text-muted w-75 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="text-center p-5 d-flex flex-column justify-content-center align-items-center h-100 card-hover">
                            <img src={icon_3} alt="" className="img-fluid mt-5" />
                            <div className="fw-semibold fs-5 mt-3 mb-2">Audit & Assurance</div>
                            <div className="text-muted w-75 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-xl-6 p-0">
                        <img src={card_1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-xl-6">
                        <div className="w-50 ms-5">
                            <div className="text-muted mb-3">All of our Skills In The Fild</div>
                            <div className="h2 mb-4">Differentiate Yourself And Attractive Attention</div>
                            <div className="text-muted mb-5">Tempor incididunt ut labore et cvhjfhore magna aliqua. Ut enim ad minim veniam, quis.</div>
                            <div className="mt-5 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <div>User Interface</div>
                                    <div>75%</div>
                                </div>
                                <div className="progress" role="progressbar" style={{ height: "5px" }}>
                                    <div className="progress-bar" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                            <div className="mt-4 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <div>User Interface</div>
                                    <div>89%</div>
                                </div>
                                <div className="progress" role="progressbar" style={{ height: "5px" }}>
                                    <div className="progress-bar" style={{ width: "89%" }}></div>
                                </div>
                            </div>
                            <div className="mt-4 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <div>User Interface</div>
                                    <div>95%</div>
                                </div>
                                <div className="progress" role="progressbar" style={{ height: "5px" }}>
                                    <div className="progress-bar" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row align-items-end">
                    <div className="col-xl-12">
                        <div className="fs-5">Once you’ve settled on a business</div>
                    </div>
                    <div className="col-xl-6">
                        <div className="h1 mt-4" style={{ width: "80%", lineHeight: "60px" }}>High Performance Services For Multiple Industries.</div>
                    </div>
                    <div className="col-xl-6 text-end">
                        <Link to='' className="btn btn-primary btn-lg px-5 rounded-0">View more</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 pt-5 px-0">
                <div className="row g-0">
                    <div className="col-xl-5">
                        <img src={card_6} alt="" className="w-100" style={{ height: "672px", cursor: "pointer" }} />
                    </div>
                    <div className="col-xl-7">
                        <div className="row g-0">
                            <div className="col-xl-5">
                                <img src={card_5} alt="" className="img-fluid h-100" style={{ cursor: "pointer" }} />
                            </div>
                            <div className="col-xl-7">
                                <img src={card_4} alt="" className="img-fluid h-100" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-xl-7">
                                <img src={card_3} alt="" className="img-fluid h-100" style={{ cursor: "pointer" }} />
                            </div>
                            <div className="col-xl-5">
                                <img src={card_2} alt="" className="img-fluid h-100" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home