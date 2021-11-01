import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                className="py-3 navbar_bg"
                collapseOnSelect
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                    >
                        <img
                            className="headerimg"
                            src="https://w7.pngwing.com/pngs/227/862/png-transparent-thor-s-well-backpacking-travel-hotel-logo-backpacker-hostel.png"
                            alt=""
                        />
                        <p className="fs-3 fw-bold text-white logo-name">
                            TRAVEL
                        </p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <Nav.Link className="header-color" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            {user?.email && (
                                <>
                                    <Nav.Link className="header-color" as={Link} to="/mybooking">
                                        Bookings
                                    </Nav.Link>
                                    <Nav.Link className="header-color" as={Link} to="/managebooking">
                                        Manage Bookings
                                    </Nav.Link>
                                    <Nav.Link className="header-color" as={Link} to="/addnewbooking">
                                        New Bookings
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link className="header-color" as={Link} to="/about">
                                About Us
                            </Nav.Link>
                            <Nav.Link className="header-color" as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {user?.email ? (
                            <span>
                                <span className="username">
                                    {user?.displayName}
                                </span>
                                <span className=" logout" onClick={logOut}>
                                    Log Out
                                </span>
                            </span>
                        ) : (
                            <Nav>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className="fs-5 text-white fw-bold"
                                >
                                    Log in
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
