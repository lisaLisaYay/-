import Carousel from "./Carousel/Carousel";
import TimePeriod from "./TimePeriod/TimePeriod";

import { DateContainer, DateWrap } from "./DateDiplay.styles";
import { TimeStamp } from "../../../types/data.types";

interface DateProps {
  timeStamps: TimeStamp[];
  currentTimeStamp: TimeStamp;
  changeTimeStamp: (timeStamp: TimeStamp) => void;
}

function DateDisplay({ timeStamps, currentTimeStamp, changeTimeStamp}: DateProps) {

  return (
    <DateWrap>
      <TimePeriod
        startDate={currentTimeStamp.startDate}
        endDate={currentTimeStamp.endDate}
      />
      <DateContainer>
        <Carousel
          timeStamps={timeStamps}
          currentTimeStamp={currentTimeStamp}
          changeTimeStamp={changeTimeStamp}
        />
      </DateContainer>
    </DateWrap>
  );
}

export default DateDisplay;
