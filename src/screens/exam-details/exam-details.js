import { Row } from "react-bootstrap";
import BodyWrapper from "../../components/body-wrapper";
import Card from "../../components/card";

function ExamDetails() {
  const breadcrumb = [
    { key: "Home", value: "/" },
    { key: "My Dashboard", value: "/my-dashboard" },
    { key: "My Exams", value: "/my-exams" },
    { key: "SAA-C03", value: "/saa-c03" },
  ];
  return (
    <BodyWrapper enableNavbar breadcrumb={breadcrumb}>
      <Card
        title={"My Exams"}
        subtitle={"Here's a list of all exams you have access to."}
      >
        <Row></Row>
      </Card>
    </BodyWrapper>
  );
}

export default ExamDetails;
