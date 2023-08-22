import styled from "styled-components";

export const ChoiceDefault = styled.div`
  border: 1px solid #7f3cec;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  transition: all 0.2s ease;
  margin: 15px 0;

  &:hover,
  &.selected {
    background: #7f3cec;
    color: #fff;
    transition: all 0.2s ease;
  }
`;
export const ChoiceError = styled.div`
  border: 1px solid #db3b21;
  background: #f7d5d0;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  transition: all 0.2s ease;
  margin: 15px 0;
  display: flex;
  align-items: center;
  pointer-events: none;
`;
export const ChoiceSuccess = styled.div`
  border: 1px solid #1aaa55;
  background: #ceeddb;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  transition: all 0.2s ease;
  margin: 15px 0;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const TextWrapper = styled.div``;
export const IconWrapper = styled.div``;
