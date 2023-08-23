import { CustomCard, Title, Subtitle } from "./styles";
function Card({ title, subtitle, children }) {
  return (
    <CustomCard md={8}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </CustomCard>
  );
}

export default Card;
