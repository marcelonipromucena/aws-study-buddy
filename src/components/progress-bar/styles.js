import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
  

`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  ${({ completed }) => completed && `width: ${completed}%;`};
  ${({ bgcolor }) => bgcolor && `background-color: ${bgcolor};`};
  border-radius: inherit;
  text-align: right;
`;

export const ProgressBarLabel = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`;
