import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <Container>
                <h4 className="">NEED MORE INSPIRATION</h4>
                <h1>You might start with a feeling.</h1>
                <Row>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="far fa-compass"></i>
                            <h2>Scenic Drives</h2>
                            <p>
                                Do you crave an off-the-grid road trip? Then point the car toward Eastern, Central and Southern
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-globe"></i>
                            <h2>Worldwide</h2>
                            <p>
                                Sometimes you just get a hankering to drive. It’s not about speed or distance or getting to one particular destination.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-wallet"></i>
                            <h2>Cheap</h2>
                            <p>
                                The largest and most robust networks of electric vehicle fast-charging stations in the U.S.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-headphones"></i>
                            <h2>24/7 Service</h2>
                            <p>
                                Trusted results for Your Search Query. Check
                                Search for the best results! Unlimited
                                Access. 100% Secure.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;
