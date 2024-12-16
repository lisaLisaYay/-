import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: absolute;
  width: 530px;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const CarouselCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform-origin: center;
  border: 1px solid rgba(48, 62, 88, 0.2);
  overflow: visible;
  transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 1);
`;

interface DotProps {
  $isactive: boolean;
  $angle: number;
  $rotation: number;
}

export const InnerDotText = styled.div<DotProps>`
  visibility: ${(props) => (props.$isactive ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isactive ? 1 : 0)};
  transform: rotate(${(props) => -props.$rotation - props.$angle}deg);
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  transition: opacity 0.4s ease 0.16s;
`;

export const Dot = styled.div<DotProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$isactive ? "55px" : "5px")};
  height: ${(props) => (props.$isactive ? "55px" : "5px")};
  background-color: ${(props) => (props.$isactive ? "#F4F5F9" : "#42567A")};
  border-radius: 50%;
  border: 1px solid #303e5880;
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.2s ease;
  transform: rotate(${(props) => props.$angle}deg) translateX(264.3px);

  // increase hitting area
  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
    background-color: transparent;
    border-radius: 50%;
    pointer-events: auto;
  }

  &:hover {
    width: 55px;
    height: 55px;
    background-color: #f4f5f9;
    transition: width 0.3s ease, height 0.3s;
  }

  &:hover ${InnerDotText} {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease-in 0.16s;
  }
`;

export const Theme = styled.div<DotProps>`
  position: absolute;
  opacity: ${(props) => (props.$isactive ? 1 : 0)};
  visibility: ${(props) => (props.$isactive ? "visible" : "hidden")};
  transition: opacity 0.4s ease 0.16s;
  transform: rotate(${(props) => -props.$rotation - props.$angle}deg)
    translateX(75px);
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  padding-left: 20px;
`;
