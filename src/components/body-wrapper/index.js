import { PageWrapper, GrayBodyWrapper } from "./styles";
import Navbar from "../navbar/navbar";

function BodyWrapper({ children, enableNavbar }) {
  return (
    <PageWrapper>
      {enableNavbar && <Navbar />}
      <GrayBodyWrapper fluid>{children}</GrayBodyWrapper>
    </PageWrapper> 
  );
}

export default BodyWrapper;
