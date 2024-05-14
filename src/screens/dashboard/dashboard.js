import { Row } from "react-bootstrap";
import { FiCreditCard } from "react-icons/fi";
import { GiCard10Clubs, GiLevelEndFlag } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import BodyWrapper from "../../components/body-wrapper";
import Card from "../../components/card";
import DashboardCard from "./dashboard-card";
function Dashboard() {
  const breadcrumb = [
    { key: "Home", value: "/" },
    { key: "My Dashboard", value: "/my-dashboard" },
  ];
  return (
    <BodyWrapper enableNavbar breadcrumb={breadcrumb}>
      <Card
        title={"My Dashboard"}
        subtitle={
          "Here you can manage your account and view your progress throughout the course."
        }
      >
        <Row className="p-0 m-0">
          <DashboardCard
            href={"/my-dashboard/my-exams"}
            icon={<PiExam size={70} />}
            title={"My Exams"}
          />
          <DashboardCard
            href={"/my-dashboard/my-progress"}
            icon={<GiLevelEndFlag size={70} />}
            title={"My Progress"}
          />
          <DashboardCard
            href={"/my-dashboard/flashcards"}
            icon={<GiCard10Clubs size={70} />}
            title={"Flashcards"}
          />
        </Row>
        <Row className="p-0 m-0">
          <DashboardCard
            href={"/my-dashboard/account-settings"}
            icon={<MdManageAccounts size={70} />}
            title={"Account Settings"}
          />
          <DashboardCard
            href={"/my-dashboard/payment"}
            icon={<FiCreditCard size={70} />}
            title={"Payment"}
          />
        </Row>
      </Card>
    </BodyWrapper>
  );
}

export default Dashboard;
