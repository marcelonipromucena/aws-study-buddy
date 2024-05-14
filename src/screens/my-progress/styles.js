import { Row } from "react-bootstrap";
import styled from "styled-components";


export const WrapperProgressItems = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
export const ProgressWrapper = styled.div`
  ${({ bgcolor }) => bgcolor && `background: ${bgcolor};`};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px;
  margin-bottom:15px;
`;
export const ProgressItemTitle = styled.div`
  font-size: 30px;
  text-align: left;
  color: #fff;
`;

export const ProgressText = styled.p`
  font-size: 60px;
  color: #fff;
`;
export const WrapperProgressBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapperProgressHeader = styled.div``;

export const ProgressItemSubtitle = styled.p`
  text-align: left;
  color: #fff;
`;
