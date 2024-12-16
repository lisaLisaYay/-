import styled from "styled-components";
import { media } from "../../styles/media";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  ${media.mobile(`
  gap:60px;
  margin-bottom:60px;
  `)}

&::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    bottom: -60px;
    background-color: #C7CDD9;
    display: none;
  }

  ${media.mobile(`
  &::before {
  display:block;
  }
  `)}
`;

export const StyledTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  max-width: 400px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 5px;
    left: -80px;
    background: linear-gradient(to bottom, #3877EE, #EF5DA8);
  }

  ${media.tablet(`
  font-size: 40px;
  padding-top: 40px;

   &::before {
   display: none}
`)}

  ${media.mobile(`
  font-size: 30px;
  padding-top: 0;
     &::before {
   display: none}
  `)}
`;
