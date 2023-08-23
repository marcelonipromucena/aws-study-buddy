import BodyWrapper from "../../components/body-wrapper";
import { Row, Col } from "react-bootstrap";
import {
  Card,
  Title,
  Subtitle,
  BreadcrumbWrapper,
  WrapperAccountOptions,
  AccountOption,
  AccountOptionText,
} from "./styles";
import { FiCreditCard } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { GiLevelEndFlag, GiCard10Clubs } from "react-icons/gi";
import { PiExam } from "react-icons/pi";

function Dashboard() {
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
      </BreadcrumbWrapper>
      <Row style={{ justifyContent: "center" }}>
        <Col md={2}></Col>
        <Card md={8}>
          <Title>My Dashboard</Title>
          <Subtitle>
            Here you can manage your account and view your progress throughout
            the course.
          </Subtitle>

          <Row>
            <Col md={4}>
              <WrapperAccountOptions>
                <AccountOption href="/my-dashboard/my-exams">
                  <PiExam size={70} />
                  <AccountOptionText>My Exams</AccountOptionText>
                </AccountOption>
              </WrapperAccountOptions>
            </Col>

            <Col md={4}>
              <WrapperAccountOptions>
                <AccountOption href="/my-dashboard/my-progress">
                  <GiLevelEndFlag size={70} />
                  <AccountOptionText>My Progress</AccountOptionText>
                </AccountOption>
              </WrapperAccountOptions>
            </Col>

            <Col md={4}>
              <WrapperAccountOptions>
                <AccountOption href="/my-dashboard/flashcards">
                  <GiCard10Clubs size={70} />
                  <AccountOptionText>Flashcards</AccountOptionText>
                </AccountOption>
              </WrapperAccountOptions>
            </Col>

            <Col md={4}>
              <WrapperAccountOptions>
                <AccountOption href="/my-dashboard/account-settings">
                  <MdManageAccounts size={70} />
                  <AccountOptionText>Account Settings</AccountOptionText>
                </AccountOption>
              </WrapperAccountOptions>
            </Col>

            <Col md={4}>
              <WrapperAccountOptions>
                <AccountOption href="/my-dashboard/payment">
                  <FiCreditCard size={70} />
                  <AccountOptionText>Payment</AccountOptionText>
                </AccountOption>
              </WrapperAccountOptions>
            </Col>
          </Row>
        </Card>
        <Col md={2}></Col>
      </Row>
    </BodyWrapper>
  );
}

export default Dashboard;
