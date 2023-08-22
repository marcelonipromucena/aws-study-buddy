import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarWrapper = styled(Navbar)`
  background: #fff;
  padding: 0;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  margin-right: 0;
`;
export const NavbarBrandImage = styled.img`
  width:100px;
`;

export const NavbarLink = styled(Nav.Link)`
  font-family: "Jaldi";
  font-size: 30px;
  font-weight: bold;
  color: #000;

  &:hover,
  &:active {
    color: #7f3cec;
  }

  @media (min-width: 769px) {
    &:first-child {
      margin-left: 50px;
    }

    margin: 0 15px;
    font-size: 20px;
  }

  @media (min-width: 992px) and (max-width: 1250px) {
    max-width: 500px;
    font-size: 15px;
    margin: 0 !important;
  }
`;

export const NavbarLinkDropdown = styled(NavDropdown)`
  font-size: 18px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span,
  svg {
    color: #000 !important;
  }
`;
export const NavbarLinkDropdownItem = styled(NavDropdown.Item)``;

export const WrapperShoppingCartIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;
export const NotificationPoint = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #7f3cec;
  width: 15px;
  height: 15px;
  border-radius: 50px;
`;
