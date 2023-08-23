import {
  ProgressBarContainer,
  ProgressBarFiller,
  ProgressBarLabel,
} from "./styles";

function ProgressBar({ bgcolor, completed }) {
  return (
    <ProgressBarContainer>
      <ProgressBarFiller completed={completed} bgcolor={bgcolor}>
        <ProgressBarLabel>{completed}%</ProgressBarLabel>
      </ProgressBarFiller>
    </ProgressBarContainer>
  );
}

export default ProgressBar;
