import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import brandImage from "../../img/dark Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="top-navbar ">
        <div className="d-flex justify-content-around align-items-center ">
          <h5>Get in Touch</h5>
          <h5 className="ms-3">
            <BsFillTelephoneFill /> +91 98765 43210
          </h5>
          <h5 className="ms-3"> +91 89654 32354</h5>
          <h5 className="ms-3">help@firstskill.com</h5>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h5>Follow Us:</h5>
          <h5 className="ms-3">
            <FaFacebookSquare />
          </h5>
          <h5 className="ms-3">
            <FaTwitterSquare />
          </h5>
          <h5 className="ms-3">
            <AiFillLinkedin />
          </h5>
        </div>
      </div>
      <Navbar bg="light" expand="lg" className="navbar-content">
        <Navbar.Brand href="#home">
          <img src={brandImage} alt="brand-logo" />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link">
              <Nav.Link to="/home">Home</Nav.Link>
              <Nav.Link to="/courses">Courses</Nav.Link>
              <Nav.Link to="/blog">Blog</Nav.Link>
              <Nav.Link to="/about">About Us</Nav.Link>
              <Nav.Link to="/contact">Contact Us</Nav.Link>

              <button type="button" class="login-button">
                Register/Log In
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
