import {
  ExamThumbnail,
  ExamTitle,
  WrapperExam,
  WrapperExamLeft,
  WrapperExamRight,
} from "./styles";

function ExamItem({ bgcolor, bordercolor, imgSrc, examTitle, examInfos }) {
  return (
    <a href="/my-dashboard/my-exams/exam/aws-saa-c03">
      <WrapperExam bgcolor={bgcolor} bordercolor={bordercolor}>
        <WrapperExamLeft sm={12} md={2}>
          <ExamThumbnail src={require("../../assets" + imgSrc)} />
        </WrapperExamLeft>
        <WrapperExamRight sm={12} md={10}>
          <ExamTitle>{examTitle}</ExamTitle>
          {examInfos}
        </WrapperExamRight>
      </WrapperExam>
    </a>
  );
}

export default ExamItem;
