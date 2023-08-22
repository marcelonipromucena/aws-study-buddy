import { ButtonWrapper, Button } from "./styles";

function CustomButton({ children }) {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
}

export default CustomButton;
