import Breadcrumb from "../../components/breadcrumb";
import Navbar from "../navbar/navbar";
import { GrayBodyWrapper, PageWrapper } from "./styles";

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
