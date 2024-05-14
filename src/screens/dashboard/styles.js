import { Col } from "react-bootstrap";
import styled from "styled-components";

export const WrapperAccountOptions = styled(Col)`
  margin-top: 15px;
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
