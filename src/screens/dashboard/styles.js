import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Card = styled(Col)`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 10px;
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

export const BreadcrumbWrapper = styled.ul`
  display: flex;
  background: #efefef;
  height: 50px;
  color: #000;
  align-items: center;
  justify-content: center;
  li {
    display: inline;
    text-align: center;

    a {
      text-decoration: none;
      transition: all 0.2s ease;
      color: #000;
      font-size: 20px;

      &:hover {
        color: #7f3cec;
        font-size: 20px;
        transition: all 0.2s ease;
      }
    }
  }
`;

export const WrapperAccountOptions = styled(Col)`
  margin-top: 15px;
  /* *:not(:first-child):not(:last-child) {
    margin-left: 15px;
  }

  &:not(:first-child) {
    margin-left: 15px;

    @media (min-width: 0px) and (max-width: 1250px) {
      margin-left: 0px;
    }
  } */
`;
export const AccountOption = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #7f3cec;
  border: 1px solid #7f3cec;
  border-radius: 10px;
  padding: 15px;
  transition: all 0.2s ease;
  font-size: 20px;

  &:hover {
    background: #7f3cec;
    color: #fff;
    transition: all 0.2s ease;
  }
`;
export const AccountOptionText = styled.div``;
