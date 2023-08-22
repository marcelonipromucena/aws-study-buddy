import styled from "styled-components";
import { FiLoader } from "react-icons/fi";

export const CustomLoader = styled(FiLoader)`
  animation: spin-animation 0.5s infinite;

  @keyframes spin-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
