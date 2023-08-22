import { CustomLoader } from "./styles";

function Loader({ show }) {
  return <>{show && (<CustomLoader />)}</>;
}

export default Loader;
