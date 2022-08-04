import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center"> <b>Michelle</b> is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Opening its doors in 2013, <b>Michelle Hotels & Homes</b>, a young hotel startup, today is the world’s leading chain of hotels, homes, and spaces. The portfolio combines fully operated real estate comprising more than 44,000 hotels with over 1.2 million rooms. Through its vacation homes business, the company offers travellers and city dwellers access to over 125,000 homes around the world under Michelle Home, Belvilla, Danland, Dancenter and Germany-based Traum-Ferienwohnungen brands. Michelle today operates in over 800 cities in 80 countries, including the U.S., Europe, U.K., India, Middle East, Southeast Asia, and Japan.We strive to make the lives of our patrons easier by multiplying revenue channels and using our technological expertise to maximize demand.</p>
                <h3><b>Safety and security</b></h3>
                <p className="btn-danger"><b>SOS</b></p>
                <p>If at any moment in a storefront within the Michelle network, you feel unsafe or suspicious about something, press the SOS button on your Michelle app, for help available 24*7. Our team will ensure someone reaches you immediately to help resolve your safety and security concerns.</p>
                <p className="btn-danger"><b>Zero tolerance towards trafficking and offences against children</b></p>
                <p>We expect our Patrons to follow all applicable laws. Storefronts found engaging in illegal activities are immediately suspended from the Michelle network. We frequently train our Patrons and their employees to watch out for red flags and take preventive action.</p>
                <p className="btn-danger"><b>Fire and life safety</b></p>
                <p>When we onboard a storefront on our platform, we check that it is equipped with fire extinguishers and each room has a safety latch. CCTVs are located in all public areas, especially at entry and exit points.</p>
                <p className="btn-danger"><b>COVID-19 Safety regulations</b></p>
                <p>The COVID-19 pandemic has reinforced the value of health and hygiene. We keep our Patrons informed on guidance from experts such as the World Health Organization and local public health recommendations.When required by local laws or guidelines, all Patrons and customers must:</p>
                
                <ul>
                    <li className="bol">Wear a mask or face covering when interacting in person.</li>
                    <li className="bol">
                         Maintain 6 feet (2 meters) of distance from each other at all times.
                    </li>
                    <li className="bol">Strictly avoid travel if recently been exposed to or have symptoms of COVID-19.</li>
                </ul>            
                
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">What Our Clients says</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Dave .H</h3>
                                            <p>You cannot expect the standards of the star hotels, Yes the options on a budget rates are too good. I would really recommend</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Susanne</h3>
                                            <p>I always ask my frens follow Michelle, Helpfull. Whats i like free of cost they provide BIOTIQUE PRODUCTS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Mohammed Hussain-Chennai</h3>
                                            <p>Awesome! This company provides an awesome customer support service, responds to our every notification, and resolves most of the user complaints.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer RTY</h3>
                                            <p> We stay here once a year at least for special events when we don’t want to drive home. Staff is always friendly. Very clean. Have never had a bad experience and it’s right in the heart of city, so you can walk to everything.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Director</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Lead</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Managing Director</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">8 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;