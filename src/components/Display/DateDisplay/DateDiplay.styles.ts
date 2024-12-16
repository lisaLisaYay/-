import styled from "styled-components";
import { media } from "../../../styles/media";

export const DateWrap = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80px;
    right: -80px;
    height: 1px;
    background-color: rgb(66, 86, 122, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateY(-50vh);
    height: 200vh; 
    width: 1px;
    background-color: rgb(66, 86, 122, 0.1);
  }

  ${media.mobile(`
  height: fit-content;
    &::before {
    display:none
    }

    &::after {
      display: none
    }
  `)}
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 590px;
  width: 590px;
  overflow: hidden;
  position: absolute;
  z-index: 10;

  ${media.mobile(`
  display:none
`)}
`;

