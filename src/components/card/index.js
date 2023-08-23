import { CustomCard, Title, Subtitle } from "./styles";
import { Row, Col } from "react-bootstrap";

function Card({ title, subtitle, children }) {
  return (
    <Row className="p-0 m-0">
      <Col md={2}></Col>
      <CustomCard md >
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Row className="p-0 m-0">{children}</Row>
      </CustomCard>
      <Col md={2}></Col>
    </Row>
  );
}

export default Card;
