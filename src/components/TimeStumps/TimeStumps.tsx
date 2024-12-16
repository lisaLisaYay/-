import { useState } from "react";

import { TimeStumpsContainer } from "./TimeStumps.styles";
import Display from "../Display/Display";
import Slider from "../Slider/Slider";

import { TimeStamp } from "../../types/data.types";
import { dummyData as timeStamps} from "../../assets/data";


function Year() {
  const [currentTimeStamp, setCurrentTimeStamp] = useState<TimeStamp>(timeStamps[0]);

  const changeTimeStamp = (timeStamp: TimeStamp) => {
    const selectedTimeStamp = timeStamps.find((item) => item.id === timeStamp.id);
    if (selectedTimeStamp) {
      setCurrentTimeStamp(selectedTimeStamp);
    }
  };

  return (
    <TimeStumpsContainer>
      <Display timeStamps={timeStamps} currentTimeStamp={currentTimeStamp} changeTimeStamp={changeTimeStamp} />
      <Slider timeStamps={timeStamps} currentTimeStamp={currentTimeStamp} listLength={timeStamps.length} currentIndex={currentTimeStamp.id} changeTimeStamp={changeTimeStamp} />
    </TimeStumpsContainer>
  );
}

export default Year;
