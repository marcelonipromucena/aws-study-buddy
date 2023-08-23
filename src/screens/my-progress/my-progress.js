import BodyWrapper from "../../components/body-wrapper";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/card";

import {
  BreadcrumbWrapper,
  WrapperProgressItems,
  ProgressWrapper,
  ProgressItemTitle,
  ProgressText,
  WrapperProgressBody,
  WrapperProgressHeader,
  ProgressItemSubtitle,
} from "./styles";
import ProgressBar from "../../components/progress-bar";
import { AiOutlineLineChart, AiOutlineInfoCircle } from "react-icons/ai";
import CountUp from "react-countup";

function MyProgress() {
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
          <a href="/my-dashboard/my-progress">My Progress</a>
        </li>
      </BreadcrumbWrapper>
      <Row>
        <Col md={2}></Col>
        <Card
          md={8}
          title={"My Progress"}
          subtitle={"Here you can check your progress in a visual manner."}
        >
          <Col md={12}>
            <WrapperProgressItems>
              <Col>
                <ProgressWrapper bgcolor={"#7f3cec"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>Exams taken</ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      <CountUp end={7} />
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>

              <Col>
                <ProgressWrapper bgcolor={"#82dd55"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>Correct answers</ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      <CountUp end={209} />
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>

              <Col>
                <ProgressWrapper bgcolor={"#e23636"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>Incorrect answers</ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      <CountUp end={209} />
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>

              <Col>
                <ProgressWrapper bgcolor={"#59a6e4"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>Questions taken</ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      <CountUp end={418} />
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>
            </WrapperProgressItems>
            <WrapperProgressItems>
              <Col>
                <ProgressWrapper bgcolor={"#59a6e4"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>
                      Avg. Time per Question
                    </ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      04m 18s
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>

              <Col>
                <ProgressWrapper bgcolor={"#59a6e4"} sm={12} md={3}>
                  <WrapperProgressHeader>
                    <ProgressItemTitle>
                      Avg. Time per Exam
                    </ProgressItemTitle>
                  </WrapperProgressHeader>
                  <WrapperProgressBody>
                    <ProgressText>
                      108min 
                    </ProgressText>
                    <AiOutlineLineChart
                      className={"progress-icon"}
                      size={90}
                      color={"white"}
                    />
                  </WrapperProgressBody>
                </ProgressWrapper>
              </Col>
            </WrapperProgressItems>
          </Col>
        </Card>
        <Col md={2}></Col>
      </Row>
    </BodyWrapper>
  );
}

export default MyProgress;
