import { Row } from "react-bootstrap";
import { PiExam, PiSealQuestionLight } from "react-icons/pi";
import BodyWrapper from "../../components/body-wrapper";
import Card from "../../components/card";
import ExamItem from "./exam-item";
import { ExamInfo, WrapperExams } from "./styles";

function MyExams() {
  const breadcrumb = [
    { key: "Home", value: "/" },
    { key: "My Dashboard", value: "/my-dashboard" },
    { key: "My Exams", value: "/my-dashboard/my-exams" },
  ];

  return (
    <BodyWrapper enableNavbar breadcrumb={breadcrumb}>
      <Card
        title={"My Exams"}
        subtitle={"Here's a list of all exams you have access to."}
      >
        <Row>
          <WrapperExams>
            <ExamItem
              bgcolor={"#0d1e91"}
              bordercolor={"#3c92f9"}
              imgSrc={"/badge-aws-solutions-architect-associate.png"}
              examTitle={" AWS Solutions Architect Associate - SAA-C03"}
              examInfos={
                <>
                  <ExamInfo>
                    <PiExam size={30} />
                    &nbsp; 5 Tests
                  </ExamInfo>
                  <ExamInfo>
                    <PiSealQuestionLight size={30} />
                    &nbsp; 325 Questions
                  </ExamInfo>
                </>
              }
            />

            <ExamItem
              bgcolor={"#0d1e91"}
              bordercolor={"#3c92f9"}
              imgSrc={"/badge-aws-developer-associate.png"}
              examTitle={"AWS Developer Associate - DVA-C02"}
              examInfos={
                <>
                  <ExamInfo>
                    <PiExam size={30} />
                    &nbsp; 5 Tests
                  </ExamInfo>
                  <ExamInfo>
                    <PiSealQuestionLight size={30} />
                    &nbsp; 325 Questions
                  </ExamInfo>
                </>
              }
            />

            <ExamItem
              bgcolor={"#5536b8"}
              bordercolor={"#7A77FA"}
              imgSrc={"/badge-aws-security-specialty.png"}
              examTitle={"AWS Security Specialty - SCS-C02"}
              examInfos={
                <>
                  <ExamInfo>
                    <PiExam size={30} />
                    &nbsp; 5 Tests
                  </ExamInfo>
                  <ExamInfo>
                    <PiSealQuestionLight size={30} />
                    &nbsp; 325 Questions
                  </ExamInfo>
                </>
              }
            />
          </WrapperExams>
        </Row>
      </Card>
    </BodyWrapper>
  );
}

export default MyExams;
