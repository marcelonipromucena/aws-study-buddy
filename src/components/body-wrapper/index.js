import { PageWrapper, GrayBodyWrapper } from "./styles";
import Navbar from "../navbar/navbar";
import Breadcrumb from "../../components/breadcrumb";

function BodyWrapper({ children, enableNavbar, breadcrumb }) {
  return (
    <PageWrapper>
      {enableNavbar && <Navbar />}
      <GrayBodyWrapper fluid>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {children}
      </GrayBodyWrapper>
    </PageWrapper>
  );
}

export default BodyWrapper;
