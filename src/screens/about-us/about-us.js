import BodyWrapper from "../../components/body-wrapper";
import { Card, Title,Subtitle } from "./styles";
import { Row, Col } from "react-bootstrap";
import Text from "../../components/text/text";
function AboutUs() {
  return (
    <BodyWrapper enableNavbar>
      <Row style={{ justifyContent: "center" }}>
        <Col md={2}></Col>
        <Card md={8}>
          <Title>About US</Title>
          <Subtitle>
            Here you can learn more about our principles and goals.
          </Subtitle>
          <p>&nbsp;</p>
          <Text textAlign={"left"} fontSize={"30"}>
            <p>
              At IT Stage, we are driven by an unwavering passion for
              technology improvement. Our journey began with a simple yet
              profound belief: that technology has the power to transform the
              world, to make it better, smarter, and more connected. This belief
              fuels our every endeavor, propelling us forward on a relentless
              quest for innovation and progress.
            </p>
            <p>
              In the fast-paced world of technology, staying ahead of the curve
              is not just a goal; it's a commitment we wholeheartedly embrace.
              We understand that the digital landscape is ever-evolving, and we
              thrive on the challenges it presents. Our team of dedicated and
              brilliant minds is constantly pushing the boundaries of what's
              possible, striving to create solutions that inspire and make a
              real difference.
            </p>
            <p>
              Our story is one of continuous evolution and adaptation. We have
              grown, not just in terms of our size and reach, but in our ability
              to adapt to change and harness its potential. This adaptability
              has allowed us to remain at the forefront of technological
              advancements, pioneering breakthroughs that redefine industries
              and enhance the human experience.
            </p>
          </Text>
        </Card>
        <Col md={2}></Col>
      </Row>
    </BodyWrapper>
  );
}

export default AboutUs;
