import { useState, useEffect } from "react";
import { CarouselContainer, CarouselCircle, Dot, Theme, InnerDotText } from "../Carousel/Carousel.styles";

import { TimeStamp } from "../../../../types/data.types";

interface CarouselProps {
  timeStamps: TimeStamp[];
  currentTimeStamp: TimeStamp;
  changeTimeStamp: (timeStamp: TimeStamp) => void;
}

function Carousel({ timeStamps, currentTimeStamp, changeTimeStamp }: CarouselProps) {
    
  const [rotation, setRotation] = useState<number>(0);
  const anglePerDot = 360 / timeStamps.length;

  const handleClick = (id: number) => {
    changeTimeStamp(timeStamps.find((item) => item.id === id)!);
  };

  useEffect(() => {
    const currentIndex = currentTimeStamp.id - 1;
    const currentAngle = currentIndex * -anglePerDot;
    const totalRotation = timeStamps.length * anglePerDot;
  
    let rotationChange = currentAngle - (rotation % totalRotation);
  
    // rotate in the shortest direction
    if (rotationChange > anglePerDot * (timeStamps.length / 2)) {
      rotationChange -= totalRotation;
    } else if (rotationChange < -anglePerDot * (timeStamps.length / 2)) {
      rotationChange += totalRotation;
    }
  
    setRotation((prevRotation) => prevRotation + rotationChange);
  }, [currentTimeStamp, timeStamps.length, anglePerDot]);

  return (
    <CarouselContainer>
      <CarouselCircle style={{ transform: `rotate(${rotation}deg)` }}>
        {timeStamps.map((year) => {
          // position
          const angle = (year.id - 2) * (360 / timeStamps.length);

          return (
            <Dot
              key={year.id}
              $isactive={currentTimeStamp.id === year.id}
              $angle={angle}
              $rotation={rotation}
              onClick={() => handleClick(year.id)}
            >
              <InnerDotText $isactive={currentTimeStamp.id === year.id} $angle={angle} $rotation={rotation}>{year.id}</InnerDotText>
              <Theme
                $isactive={currentTimeStamp.id === year.id}
                $angle={angle}
                $rotation={rotation}>
                    {year.theme && year.theme}
              </Theme>
            </Dot>
          );
        })}
      </CarouselCircle>
    </CarouselContainer>
  );
}

export default Carousel;
