import { QuestionWrapper, QuestionText,QuestionChoices } from "./styles-question";
import QuestionNavbar from "../components/question-navbar/question-navbar";
import Choice from '../components/choice/choice';
import CustomButton from '../components/button/button';

function Question() {
  return (
    <QuestionWrapper>
      <QuestionNavbar />
      <QuestionText>
        1. You are a Solutions Architect for a technology firm that is in the
        midst of transitioning its apps to AWS. One of their systems requires a
        globally scalable database that can support frequent schema
        modifications. When the database schema changes, the application should
        not experience any downtime or performance difficulties. It should also
        respond to high-traffic queries quickly. Which database option is most
        suited for meeting this requirement?
      </QuestionText>
      <QuestionChoices> 
        <Choice isRightAnswer={null} selected={true}>
          A. Arrange deployment of Multi-AZ in API Gateway with Read Replica.
        </Choice>
        <Choice isRightAnswer={true} selected={false}>
          A. Arrange deployment of Multi-AZ in API Gateway with Read Replica.
        </Choice>
        <Choice isRightAnswer={false} selected={false}>
          A. Arrange deployment of Multi-AZ in API Gateway with Read Replica.
        </Choice> 
        <Choice isRightAnswer={null} selected={false}>
          A. Arrange deployment of Multi-AZ in API Gateway with Read Replica.
        </Choice>
      </QuestionChoices>

      <CustomButton>Continue</CustomButton>
    </QuestionWrapper>
  );
}

export default Question;
