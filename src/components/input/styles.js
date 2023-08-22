import styled from "styled-components";

export const InputWrapper = styled.div`
  min-height: 50px;
  margin-top:10px;
  text-align: left;
`;
export const InputLabel = styled.span`
  font-size: 22px;
  font-family: Jaldi;
`;
export const InputField = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7f3cec;
  width: 100%;
  font-family: Jaldi;
  font-size: 22px;

  &:focus{
    outline:none;
    border:1px dashed #7f3cec!important;
    transition: all .2s ease;
    background:none;
  }

`;
