import { DisplayContainer, StyledTitle } from "./Displey.styles";
import DateDisplay from "./DateDisplay/DateDiplay";

import { TimeStamp } from "../../types/data.types";

interface DisplayProps {
  timeStamps: TimeStamp[];
  currentTimeStamp: TimeStamp;
  changeTimeStamp: (timeStamp: TimeStamp ) => void;
}

function Display({timeStamps, currentTimeStamp, changeTimeStamp}: DisplayProps) {
  return (
    <DisplayContainer>
      <StyledTitle>Исторические <br/> даты</StyledTitle>
      <DateDisplay
        timeStamps={timeStamps}
        currentTimeStamp={currentTimeStamp}
        changeTimeStamp={changeTimeStamp}
      />
    </DisplayContainer>
  );
}

export default Display;
