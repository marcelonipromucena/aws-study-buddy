import {
  ProgressItemTitle,
  ProgressText,
  ProgressWrapper,
  WrapperProgressBody,
  WrapperProgressHeader,
} from "./styles";

import { Col } from 'react-bootstrap';

function ProgressCard({ bgcolor, title, value, icon }) {
  return (
    <Col sm={12} md={3}>
      <ProgressWrapper bgcolor={bgcolor}>
        <WrapperProgressHeader>
          <ProgressItemTitle>{title}</ProgressItemTitle>
        </WrapperProgressHeader>
        <WrapperProgressBody>
          <ProgressText>{value}</ProgressText>
          {icon}
        </WrapperProgressBody>
      </ProgressWrapper>
    </Col>
  );
}

export default ProgressCard;
