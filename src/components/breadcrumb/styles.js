import styled from "styled-components";

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