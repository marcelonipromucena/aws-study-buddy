import { useState } from "react";
import BodyWrapper from "../../components/body-wrapper";
import { Row, Col } from "react-bootstrap";
import {
  LoginCard,
  Title,
  Subtitle,
  CustomSignInButton,
  ForgotPasswordLink,
  CustomSignInWithGoogleButton,
  SignUpLink,
  SignUpLinkHgl,
} from "./styles";
import Input from "../../components/input/input";
import Loader from "../../components/loader/loader";
import ForgotPasswordView from "./forgot-password";

function SignIn() {
  const [email, setEmail] = useState("");
  const [forgotPasswordFlag, setForgotPasswordFlag] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onSubmit = () => {
    console.log(email, password);
  };

  const handleForgotPasswordView = () => setForgotPasswordFlag(true);

  return (
    <BodyWrapper enableNavbar>
      <ForgotPasswordView
        show={forgotPasswordFlag}
        setForgotPasswordFlag={setForgotPasswordFlag}
      />
      {!forgotPasswordFlag && <Row style={{ justifyContent: "center"}} >
        <Col sm={12} md={2} lg={3}></Col>
        <LoginCard sm={12} md={8} lg={true}>
          <Title>Welcome Back</Title>
          <Subtitle>Please enter your credentials</Subtitle>
          <Input
            type="email"
            label="Email"
            placeholder="john@gmail.com"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            label="Password"
            placeholder="••••••••••••••"
            value={password}
            onChange={setPassword}
          />
          <ForgotPasswordLink href="#" onClick={handleForgotPasswordView}>
            Forgot Password?
          </ForgotPasswordLink>
          <CustomSignInButton onClick={onSubmit} disabled={loading}>
            <Loader show={loading} />
            &nbsp;&nbsp; Sign In
          </CustomSignInButton>
          <CustomSignInWithGoogleButton onClick={onSubmit}>
            <img src={require("../../assets/google.svg").default} alt="imagem do google em svg"/>{" "}
            &nbsp;&nbsp;Sign In with Google
          </CustomSignInWithGoogleButton>
          <SignUpLink href="#">
            Don't have an account? <SignUpLinkHgl>Sign Up</SignUpLinkHgl>
          </SignUpLink>
        </LoginCard>
        <Col sm={12} md={2} lg={3}></Col>
      </Row>}
    </BodyWrapper>
  );
}

export default SignIn;
