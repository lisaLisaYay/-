import styled from "styled-components";
import { media } from "../../styles/media";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #f4f5f9;
  padding-left: 160px;

  ${media.mobile(`
padding-left: 0;
`)}

  ${media.tablet(`
padding-left: 0;
`)}
`;

export const TimeStumpsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  height: fit-content;
  border: 1px solid rgb(66, 86, 122, 0.1);
  padding-top: 8.5%;
  padding-left: 80px;
  padding-right: 80px;
  position: relative;
  overflow: hidden;

  ${media.tablet(`
    padding-top: 60px;
  `)}

  ${media.mobile(`
    padding: 20px;
    padding-bottom:0;
    padding-top: 0;
    justify-content: center;
    gap:20px;
`)}
`;
