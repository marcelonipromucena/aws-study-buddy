import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  LoginCard,
  Title,
  Subtitle,
  CustomSignInButton,
  GoBackButton,
} from "./styles";
import Input from "../../components/input/input";
import Loader from "../../components/loader/loader";

function ForgotPasswordView({ show, setForgotPasswordFlag }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const handleGoBack = () => setForgotPasswordFlag(false);
  const onSubmit = () => {};

  return (
    <>
      {show && (
        <Row>
          <Col></Col>
          <LoginCard sm={12} md={3} lg={2}>
            <Title>Enter your email</Title>
            <Subtitle>
              If your email exists in our database, we'll send a recovery link.
            </Subtitle>
            <Input
              type="email"
              label="Email"
              placeholder="john@gmail.com"
              value={email}
              onChange={setEmail}
            />
            <br />

            <CustomSignInButton onClick={onSubmit} disabled={loading}>
              <Loader show={loading} />
              &nbsp;&nbsp; Send a recovery link
            </CustomSignInButton>
            <GoBackButton href="#" onClick={handleGoBack}>
              Go Back
            </GoBackButton>
          </LoginCard>
          <Col></Col>
        </Row>
      )}
    </>
  );
}

export default ForgotPasswordView;
