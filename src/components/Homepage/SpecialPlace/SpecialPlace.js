import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";

const SpecialPlace = () => {
    return (
        <div className="special-place">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                        <h4>WELCOME TO TRAVELLING</h4>
                        <h1>Explore the world</h1>
                        <p>
                            On the Grid is a collection of 534 neighborhood guides lovingly curated by local creatives in 114 cities around the world. As of the end of 2019, On the Grid is no longer being updated.
                        </p>
                        <button className="button-style">EXPLORE MORE INFO</button>
                    </Col>
                    <Col md={6} xs={12}>
                        <img
                            className="img-fluid"
                            src="https://img.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg?size=626&ext=jpg"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpecialPlace;
