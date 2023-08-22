import styled from "styled-components";

export const ButtonWrapper = styled.div``;
export const Button = styled.button`
  width: 100%;
  background: #7f3cec;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 15px;

  &:hover {
    border: 1px solid #7f3cec;
    background: #fff;
    color: #000;
    transition: all 0.2s ease;
  }
`;
