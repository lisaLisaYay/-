import { useState, useEffect } from "react";
import gsap from "gsap";

import { StyledTitle } from "./TimePeriod.styles";

interface TimePeriodProps {
  startDate: number;
  endDate: number;
}

function TimePeriod({ startDate, endDate }: TimePeriodProps) {
  const [displayStartDate, setDisplayStartDate] = useState(startDate);
  const [displayEndDate, setDisplayEndDate] = useState(endDate);

  useEffect(() => {

    // make object values 
    const animationTarget = { valueStart: displayStartDate, valueEnd: displayEndDate };

    gsap.to(animationTarget, {
      duration: 2, 
      valueStart: startDate,
      ease: "power3.out", 
      onUpdate: () => {
        setDisplayStartDate(animationTarget.valueStart); 
      },
    });

    gsap.to(animationTarget, {
      duration: 2, 
      valueEnd: endDate,
      ease: "power3.out", 
      onUpdate: () => {
        setDisplayEndDate(animationTarget.valueEnd); 
      },
    });
  }, [startDate, endDate]);


  return (
    <StyledTitle>
      {Math.round(displayStartDate)} <span>{Math.round(displayEndDate)}</span>
    </StyledTitle>
  );
}

export default TimePeriod;
