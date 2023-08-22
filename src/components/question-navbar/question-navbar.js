import { QuestionNavbarWrapper, QuestionNavbarItem } from "./styles";
import { FiStar, FiClock, FiFileText, FiX } from "react-icons/fi";

function QuestionNavbar({ currentQuestion, reviewList }) {
  const addToReview = () => {};
  return (
    <QuestionNavbarWrapper>
      <QuestionNavbarItem>
        <FiFileText />
        &nbsp; 64/65
      </QuestionNavbarItem>
      <QuestionNavbarItem>
        <FiClock />
        &nbsp;119:55
      </QuestionNavbarItem>
      <QuestionNavbarItem>
        <FiStar /> &nbsp; Revisar
      </QuestionNavbarItem>
      <QuestionNavbarItem>
        <FiX /> &nbsp; Sair
      </QuestionNavbarItem>
    </QuestionNavbarWrapper>
  );
}

export default QuestionNavbar;
