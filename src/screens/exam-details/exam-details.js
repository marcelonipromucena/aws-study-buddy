import BodyWrapper from "../../components/body-wrapper";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/card";

import {
  BreadcrumbWrapper,
  WrapperExams,
  WrapperExam,
  WrapperExamLeft,
  ExamThumbnail,
  WrapperExamRight,
  ExamTitle,
  ExamInfo,
} from "./styles";
import { PiExam, PiSealQuestionLight } from "react-icons/pi";

function ExamDetails() {
  return (
    <BodyWrapper enableNavbar>
      <BreadcrumbWrapper>
        <li>
          <a href="/">Home</a>
        </li>
        &nbsp;/&nbsp;
        <li>
          <a href="/my-dashboard">My Dashboard</a>
        </li>
        &nbsp;/&nbsp;
        <li>
          <a href="/my-dashboard/my-progress">My Exams</a>
        </li>
        <li>
          <a href="/my-dashboard/my-progress/exam-details/aws-dva-c02">
            AWS Developer Associate - DVA-C02
          </a>
        </li>
      </BreadcrumbWrapper>
      <Row>
        <Col md={2}></Col>
        <Card
          md={8}
          title={"My Exams"}
          subtitle={"Here's a list of all exams you have access to."}
        >
          <Row></Row>
        </Card>
        <Col md={2}></Col>
      </Row>
    </BodyWrapper>
  );
}

export default ExamDetails;
