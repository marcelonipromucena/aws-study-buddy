import { useState } from "react";
import { Row } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import BodyWrapper from "../../components/body-wrapper";
import Button from "../../components/button/button";
import Card from "../../components/card";
import Input from "../../components/input/input";

import emailjs from "emailjs-com";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const SERVICE_ID = "service_j64rnnn";
  const TEMPLATE_ID = "template_zejfheh";

  const sendEmail = () => {
    console.log("Sending email...");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, "mensagem de teste", "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <BodyWrapper enableNavbar>
      <Card
        title={"Contact Us"}
        subtitle={"Fill up our form bellow and we'll respond you asap."}
      >
        <Row>
          <Input
            type="text"
            label="Name"
            placeholder="John Doe"
            value={name}
            onChange={setName}
          />
          <Input
            type="email"
            label="Email"
            placeholder="john@gmail.com"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="phone"
            label="Phone Number"
            placeholder="+5512345678"
            value={phone}
            onChange={setPhone}
          />
          <p>&nbsp;</p>
          <Button onClick={sendEmail}>
            <FiSend /> Send
          </Button>
        </Row>
      </Card>
    </BodyWrapper>
  );
}

export default ContactUs;
