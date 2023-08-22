import styled from "styled-components";

export const TextComponent = styled.p`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`};
  ${({ color }) => color && `color: ${color};`};
  ${({ margin }) => margin && `margin:${margin};`};
  ${({ marginTop }) => marginTop && `margin-top:${marginTop};`};
  ${({ marginBottom }) => marginBottom && `margin-bottom:${marginBottom};`};
  ${({ marginLeft }) => marginLeft && `margin-left:${marginLeft};`};
  ${({ marginRight }) => marginRight && `margin-right:${marginRight};`};
  ${({ textAlign }) => textAlign && `text-align:${textAlign};`}
  ${({ width }) => width && `width:${width};`};
  ${({ fontFamily }) => fontFamily && `font-family:${fontFamily};`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom:${paddingBottom};`};
`;
