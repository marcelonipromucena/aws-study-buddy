import styled from "styled-components";
import { Col } from "react-bootstrap";

export const LoginCard = styled(Col)`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 10px;

  @media (min-width: 769px) {
    margin-top: 10vh;
  }

  @media (min-width: 992px) {
    max-width: 500px;
  }
`;
export const Title = styled.div`
  font-size: 42px;
  font-family: "MuseoSans500";
`;
export const Subtitle = styled.div`
  font-family: Jaldi;
  font-size: 20px;
  color: #767676;
`;
export const CustomSignInButton = styled.button`
  margin: 0 !important;
  width: 100%;
  padding: 10px;
  border: none;
  background: #7f3cec;
  color: #fff;
  font-family: Jaldi;
  font-size: 20px;
  border-radius: 6px;

  &:focus,
  &:active {
    border: 1px solid #7f3cec !important;
    background: #fff;
    color: #7f3cec;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
export const CustomSignInWithGoogleButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 4px;
  border: 1px solid #7f3cec;
  background: #fff;
  color: #7f3cec;
  font-family: Jaldi;
  font-size: 20px;
  border-radius: 6px;

  &:focus,
  &:active {
    border: none;
    background: #7f3cec;
    color: #fff;
  }
`;
export const GoBackButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #7f3cec;
  background: #fff;
  color: #7f3cec;
  font-family: Jaldi;
  font-size: 20px;
  border-radius: 6px;

  &:focus,
  &:active {
    border: none;
    background: #7f3cec;
    color: #fff;
  }
`;

export const ForgotPasswordLink = styled.a`
  color: #7f3cec;
  font-family: Jaldi;
  float: right;
  margin: 10px 0;
  font-size: 20px;
  text-decoration: none;
`;

export const SignUpLink = styled.a`
  color: #767676;
  text-decoration: none;
  display: block;
  margin-top: 15px;
`;
export const SignUpLinkHgl = styled.a`
  color: #7f3cec;
  text-decoration: none;
`;
