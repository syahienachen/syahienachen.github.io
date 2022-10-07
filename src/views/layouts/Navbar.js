import React from "react";
import { Navbar as Navbars, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png"

// import "./navbar.css";

const Navbar = () => {
    return (
        <Navbars expand="lg" className="bg-navbar sticky-top">
            <Navbars.Brand href="/"><img src={logo} style={{ maxHeight: "30px" }}></img></Navbars.Brand>
            <Navbars.Toggle aria-controls="basic-navbar-nav" />
            <Navbars.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link border-navbar" to="/">Dashboard</Link>
                    <Link className="nav-link border-navbar" to="/about">About</Link>
                    <NavDropdown className="border-navbar" title="Lessons" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/lessons/html">HTML</Link>
                        <Link className="dropdown-item" to="/lessons/css">CSS</Link>
                        <Link className="dropdown-item" to="/error">Javascript</Link>
                    </NavDropdown>
                </Nav>
            </Navbars.Collapse>
        </Navbars>
    );
};

export default Navbar;
