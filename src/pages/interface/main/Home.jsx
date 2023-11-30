import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import main_banner from '../../../assets/banner/main-banner.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";

import icon_1 from '../../../assets/icons/1.png'
import icon_2 from '../../../assets/icons/2.png'
import icon_3 from '../../../assets/icons/3.png'
import card_1 from '../../../assets/cards/1.jpg'
import card_2 from '../../../assets/cards/2.png'
import card_3 from '../../../assets/cards/3.png'
import card_4 from '../../../assets/cards/4.png'
import card_5 from '../../../assets/cards/5.png'
import card_6 from '../../../assets/cards/6.png'
import card_7 from '../../../assets/cards/7.jpg'
import card_8 from '../../../assets/cards/8.png'
import bg_img from '../../../assets/cards/bg.jpg'

import brand_1 from '../../../assets/brands/1.jpg'
import brand_2 from '../../../assets/brands/2.jpg'
import brand_3 from '../../../assets/brands/3.jpg'
import brand_4 from '../../../assets/brands/4.jpg'
import brand_5 from '../../../assets/brands/5.jpg'
import brand_6 from '../../../assets/brands/6.jpg'
import brand_7 from '../../../assets/brands/7.jpg'
import brand_8 from '../../../assets/brands/8.jpg'
import brand_9 from '../../../assets/brands/9.jpg'

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

    const option2 = {
        type: 'loop',
        perPage: 5,
        focus: 0,
        omitEnd: true,
        perMove: 1,
        pagination: false,
        arrows: false,
        breakpoints:
        {
            991: { perPage: 3, gap: '1.5rem', },
            768: { perPage: 2, gap: '1.5rem', },
            575: { perPage: 2, gap: '1rem', },
        }
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
                <div className="row gx-lg-5 gx-0">
                    <div className="col-xl-4 mb-4">
                        <div className="card border-0">
                            <img src={card_8} alt="" className="img-fluid" />
                            <div className="card-body px-0">
                                <div>JANUARY 28, <span className="mx-2">|</span> 2020 NO COMMENTS</div>
                                <h5 className="my-4">Addiction When Gambling Becomes Harness The Power.</h5>
                                <Link to='/' className="text-decoration-none text-primary">CONTINUE READING <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="card border-0">
                            <img src={card_8} alt="" className="img-fluid" />
                            <div className="card-body px-0">
                                <div>JANUARY 28, <span className="mx-2">|</span> 2020 NO COMMENTS</div>
                                <h5 className="my-4">Addiction When Gambling Becomes Harness The Power.</h5>
                                <Link to='/' className="text-decoration-none text-primary">CONTINUE READING <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="card border-0">
                            <img src={card_8} alt="" className="img-fluid" />
                            <div className="card-body px-0">
                                <div>JANUARY 28, <span className="mx-2">|</span> 2020 NO COMMENTS</div>
                                <h5 className="my-4">Addiction When Gambling Becomes Harness The Power.</h5>
                                <Link to='/' className="text-decoration-none text-primary">CONTINUE READING <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 pt-5 px-0">
                <div className="row g-0">
                    <div className="col-xl-6 d-flex flex-column justify-content-center align-items-end text-white" style={{ background: `url(${bg_img})` }}>
                        <div className="w-50 me-lg-5 me-0">
                            <div style={{ color: "#9fabbe" }}>Features That You Will Get</div>
                            <div className="h1 mt-3 mb-5">All startups need to make their business work</div>
                            <div className="d-flex mb-4">
                                <FontAwesomeIcon icon={faCheck} className="bg-primary rounded-circle me-3 mt-2" style={{ padding: "7px 9px" }} />
                                <div style={{ color: "#9fabbe", lineHeight: "30px" }}>Having a home based business is a wonderful asset to your life. The problem still stands,</div>
                            </div>
                            <div className="d-flex mb-4">
                                <FontAwesomeIcon icon={faCheck} className="bg-primary rounded-circle me-3 mt-2" style={{ padding: "7px 9px" }} />
                                <div style={{ color: "#9fabbe", lineHeight: "30px" }}>Promotional Advertising Specialty You Ve Waited Long Enough</div>
                            </div>
                            <div className="d-flex mb-4">
                                <FontAwesomeIcon icon={faCheck} className="bg-primary rounded-circle me-3 mt-2" style={{ padding: "7px 9px" }} />
                                <div style={{ color: "#9fabbe", lineHeight: "30px" }}>Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing 2 200 Letters</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <img src={card_7} alt="" style={{ height: "700px", width: "100%", objectFit: "cover" }} />
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="h1 text-center mb-5 pb-4">Our Partners</div>
                <Splide options={option2} hasTrack={false}>
                    <SplideTrack>
                        <SplideSlide>
                            <img src={brand_1} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_2} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_3} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_4} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_5} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_6} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_7} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_8} alt="" className="img-fluid" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={brand_9} alt="" className="img-fluid" />
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </>
    )
}

export default Home