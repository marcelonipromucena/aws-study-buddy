import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const WrapperExams = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;
export const WrapperExam = styled(Row)`
  border: 1px solid #7f3cec;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  transition: all 0.2s ease;

  &:hover {
    ${({ bgcolor }) => bgcolor && `background: ${bgcolor};`};
    transition: all 0.2s ease;
    color: #fff;
    ${({ bordercolor }) => bordercolor && `border: 1px solid ${bordercolor};`};
  }
`;
export const WrapperExamLeft = styled(Col)``;
export const ExamThumbnail = styled.img`
  width: 200px;

  @media (min-width: 0px) and (max-width: 1250px) {
    width: 150px;
  }
`;
export const WrapperExamRight = styled(Col)``;
export const ExamTitle = styled.h1`
  text-align: left;

  @media (min-width: 0px) and (max-width: 1250px) {
    text-align: center;
  }
`;

export const ExamInfo = styled.p`
  text-align: left;
  font-size: 20px;
  margin-top: 15px;
  align-items: center;
  justify-content: left;
`;
