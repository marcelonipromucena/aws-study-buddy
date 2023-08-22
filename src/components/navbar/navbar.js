import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarLink,
  NavbarLinkDropdown,
  NavbarLinkDropdownItem,
  WrapperShoppingCartIcon,
  NotificationPoint,
  NavbarBrandImage
} from "./styles";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiUser, FiMenu, FiShoppingCart } from "react-icons/fi";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const createSignedInComponents = () => {
    return (
      <>
        <NavbarLink href="#action1">
          <WrapperShoppingCartIcon>
            <NotificationPoint />
            <FiShoppingCart size={35} />
          </WrapperShoppingCartIcon>
        </NavbarLink>
        <NavbarLinkDropdown
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiUser size={35} />
              <div>
                <span>&nbsp;&nbsp;Marceloni</span>
              </div>
            </div>
          }
        >
          <NavbarLinkDropdownItem href="#action/3.1">
            My Account
          </NavbarLinkDropdownItem>
          <NavbarLinkDropdownItem href="#action/3.3">
            My Courses
          </NavbarLinkDropdownItem>
          <NavDropdown.Divider />
          <NavbarLinkDropdownItem href="#action/3.4">
            Sign Out
          </NavbarLinkDropdownItem>
        </NavbarLinkDropdown>
      </>
    );
  };

  const createGuestComponents = () => {
    return (
      <NavbarLink href="/sign-in">
        <FiUser size={35} /> SIGN IN / SIGN UP
      </NavbarLink>
    );
  };

  return (
    <>
      <NavbarWrapper expand="lg">
        <Container fluid>
          <NavbarBrand href="/">
            <NavbarBrandImage src={require("../../assets/logo-my-study-buddy.png")}/> 
          </NavbarBrand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <FiMenu size={35} color={"#000"} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <NavbarLink href="/">HOME</NavbarLink>
              <NavbarLink href="/about-us">ABOUT US</NavbarLink>
              <NavbarLink href="/contact-us">CONTACT US</NavbarLink>
            </Nav>
            <Nav style={{ maxHeight: "100px", marginRight: "20px" }}>
              {isUserSignedIn
                ? createSignedInComponents()
                : createGuestComponents()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarWrapper>
    </>
  );
};

export default CustomNavbar;
