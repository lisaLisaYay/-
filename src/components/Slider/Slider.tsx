import DateSwiper from "./Swiper"; 
import { MainContainer, ButtonContainer, Button, Navigation, Dot, DotWrap } from "./Slider.styles";
import btnIcon from "../../assets/images/arrow.svg"
import btnIconRight from "../../assets/images/arrowRight.svg"


import { TimeStamp } from "../../types/data.types";

interface SliderProps {
  currentIndex: number;
  listLength: number;
  currentTimeStamp: TimeStamp;
  timeStamps: TimeStamp[];
  changeTimeStamp: (timeStamp: TimeStamp ) => void;
}

const Slider = ({
  currentIndex,
  listLength,
  timeStamps,
  currentTimeStamp,
  changeTimeStamp,
}: SliderProps) => {

  const handlePrev = () => {
    const prevIndex = currentIndex-1;
    changeTimeStamp(timeStamps[prevIndex-1]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    changeTimeStamp(timeStamps[nextIndex-1]);
  };

  return (
    <MainContainer>

      <Navigation>
        <p>0{currentIndex}/0{listLength}</p>
      
      <ButtonContainer>
        <Button onClick={handlePrev} disabled={currentIndex === 1}>
        <img src={btnIcon} alt="Previous" />
        </Button>
        <Button onClick={handleNext} disabled={currentIndex === listLength} className="next-btn">
          <img src={btnIconRight} alt="Next" />
        </Button>
      </ButtonContainer>

      <DotWrap>
        {timeStamps.map((timestamp, index) => (
          <Dot
          key={index}
          isCurrent={timestamp === currentTimeStamp}
        />
        ))}
      </DotWrap>
      </Navigation>

      <DateSwiper slides={currentTimeStamp.stamps} />
    </MainContainer>
  );
};

export default Slider;
