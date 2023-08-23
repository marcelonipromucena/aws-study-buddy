import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

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
    ${({ bgColor }) => bgColor && `background: ${bgColor};`};
    transition: all 0.2s ease;
    color: #fff;
    ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor};`};
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
