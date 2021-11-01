import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-style py-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="my-3">
                        <div className="footer-logo">
                            <h1>TRAVEL</h1>
                            <div className="footer-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Quick Links</h2>
                            <div>
                                <Link to="/" className="quick-link">
                                    Home
                                </Link>
                            </div>
                            <div className="quick-link">
                                <Link to="/contact" className="quick-link">
                                    contact
                                </Link>
                            </div>
                            <div>
                                <Link to="/about" className="quick-link">
                                    about
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div className="location">
                            <h2 className="mb-3">Location</h2>
                            <div>
                                <span>3596 Longview Ave, NY - Idaho Department of Commerce</span>
                            </div>
                            <div className="my-2">
                                <span>Brad Little, Governor</span>
                            </div>
                            <div>
                                <span>Tourism Inquiries: 1.800.VISITID</span>
                            </div>
                            <div className="mt-2">
                                <span>09.00 - 17.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2>Newsletter</h2>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="footer-input"
                            />
                            <br />
                            <button className="footer-button">SUBSCRIBE</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
