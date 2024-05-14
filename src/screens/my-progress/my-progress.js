import CountUp from "react-countup";
import { AiOutlineLineChart } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import BodyWrapper from "../../components/body-wrapper";
import Card from "../../components/card";
import ProgressCard from "./progress-card";
import { WrapperProgressItems } from "./styles";

function MyProgress() {
  const breadcrumb = [
    { key: "Home", value: "/" },
    { key: "My Dashboard", value: "/my-dashboard" },
    { key: "My Progress", value: "/my-dashboard/my-progress" },
  ];

  return (
    <BodyWrapper enableNavbar breadcrumb={breadcrumb}>
      <Card
        title={"My Progress"}
        subtitle={"Here you can check your progress in a visual manner."}
      >
        <WrapperProgressItems className="p-0 m-0">
          <ProgressCard
            bgcolor={"#7f3cec"}
            title={"Exams taken"}
            value={<CountUp end={7} />}
            icon={
              <AiOutlineLineChart
                className={"progress-icon"}
                size={90}
                color={"white"}
              />
            }
            md={3}
          />

          <ProgressCard
            bgcolor={"#82dd55"}
            title={"Correct answers"}
            value={<CountUp end={209} />}
            icon={<AiOutlineLineChart size={90} color={"white"} />}
            md={3}
          />

          <ProgressCard
            bgcolor={"#e23636"}
            title={"Incorrect answers"}
            value={<CountUp end={209} />}
            icon={<AiOutlineLineChart size={90} color={"white"} />}
            md={3}
          />

          <ProgressCard
            bgcolor={"#59a6e4"}
            title={"Questions taken"}
            value={<CountUp end={418} />}
            icon={<AiOutlineLineChart size={90} color={"white"} />}
            md={3}
          />
        </WrapperProgressItems>
        <WrapperProgressItems className="p-0 m-0">
          <ProgressCard
            bgcolor={"#59a6e4"}
            title={"Avg. Time per Question"}
            value={"04m"}
            md={6}
            icon={<FiClock size={90} color={"white"} />}
            md={6}
          />

          <ProgressCard
            bgcolor={"#b8e0d2"}
            title={"Avg. Time per Exam"}
            value={"108min"}
            icon={<FiClock size={90} color={"white"} />}
            md={6}
          />
        </WrapperProgressItems>
        <WrapperProgressItems className="p-0 m-0">
          <ProgressCard
            bgcolor={"#eac4d5"}
            title={"Your Best Scoring Domain"}
            value={"Security"}
            icon={<AiOutlineLineChart size={90} color={"white"} />}
            md={6}
          />
          <ProgressCard
            bgcolor={"#95b8d1"}
            title={"Your Worst Scoring Domain"}
            value={"Security"}
            icon={<AiOutlineLineChart size={90} color={"white"} />}
            md={6}
          />
        </WrapperProgressItems>
      </Card>
    </BodyWrapper>
  );
}

export default MyProgress;
