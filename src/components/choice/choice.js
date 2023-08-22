import {
  ChoiceDefault,
  ChoiceError,
  ChoiceSuccess,
  TextWrapper,
  IconWrapper,
} from "./styles";
import { FiX,FiCheck } from "react-icons/fi";

function Choice({ children, isRightAnswer, selected }) {
  const renderChoice = () => {
    if (isRightAnswer == null) {
      return (
        <ChoiceDefault className={selected && "selected"}>
          {children}
        </ChoiceDefault>
      );
    } else if (isRightAnswer) {
      return (
        <ChoiceSuccess>
          <TextWrapper>{children}</TextWrapper>
          <IconWrapper>
            <FiCheck color={"#1AAA55"} size={30} />
          </IconWrapper>
        </ChoiceSuccess>
      );
    } else {
      return (
        <ChoiceError>
          <TextWrapper>{children}</TextWrapper>
          <IconWrapper>
            <FiX color={"#DB3B21"} size={30} />
          </IconWrapper>
        </ChoiceError>
      );
    }
  };

  return renderChoice();
}

export default Choice;
