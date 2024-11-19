import React from "react";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import NavLogo from "../../assets/NavLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export const Head = () => {
  return (
    <>
      <div className="heroHead">
        <p className="heroPara">
          <ImLocation2 id="locationIcon" />
          التجمع الخامس – الحي الاول – خلف ماركت سعود – المبنى الاداري القطامية
          مول – الدور الثاني وحده 1
        </p>
        <p className="iconsContainer">
          <span className="socialIconHead1">
            {" "}
            <BsFacebook />
          </span>
          <span className="socialIconHead2">
            {" "}
            <AiFillTwitterCircle />
          </span>
          <span className="socialIconHead3">
            {" "}
            <AiFillYoutube />
          </span>
        </p>
      </div>
      <Navbar collapseOnSelect expand="lg">
        <Container className="Nav ">
          <Navbar.Brand href="#home">
            {" "}
            <img src={NavLogo} className="navLogo" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav response  ">
            <Nav className="me-auto NavbarHero ">
              <div className="navItems ">
                <Link to="/">الرئيسية</Link>
                <Link to="/الخدمات">الخدمات</Link>
                <Link to="/أخبار قضائيه">أخبار قضائية</Link>
                <Link to="/تواصل معنا">تواصل معنا</Link>

                <Link to="/من نحن">من نحن</Link>
              </div>
            </Nav>

            <a href="tel:01122772277" className="tell">
              01122772277
              <BsFillTelephoneFill style={{ marginRight: "10px" }} />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="NavbarHero">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={navLogo} className="navLogo" alt="" />
        <div
          className="navItems collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <a href="">الرئيسية</a>
          <a href="">الخدمات</a>
          <a href="">أخبار قضائية</a>
          <a href="">تواصل معنا</a>

          <a href="">من نحن</a>
        </div>
        <button>011222</button>
      </div> */}
    </>
  );
};
