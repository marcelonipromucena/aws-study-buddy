import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const Card = styled(Col)`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 10px;
`;
export const Title = styled.div`
  font-size: 42px;
  font-family: "MuseoSans500";
`;
export const Subtitle = styled.div`
  font-family: Jaldi;
  font-size: 20px;
  color: #767676;
`;

export const BreadcrumbWrapper = styled.ul`
  display: flex;
  background: #efefef;
  height: 50px;
  color: #000;
  align-items: center;
  justify-content: center;
  li {
    display: inline;
    text-align: center;

    a {
      text-decoration: none;
      transition: all 0.2s ease;
      color: #000;
      font-size: 20px;

      &:hover {
        color: #7f3cec;
        font-size: 20px;
        transition: all 0.2s ease;
      }
    }
  }
`;

export const WrapperProgressItems = styled(Row)`
  display: flex;
`;
export const ProgressWrapper = styled.div`
  ${({ bgcolor }) => bgcolor && `background: ${bgcolor};`};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px;
  margin: 15px 0;
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
