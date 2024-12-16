import styled from "styled-components";
import { media } from "../../../../styles/media";

export const StyledTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -0.02em;
  color: #3877EE;
  position: relative;
  z-index: 1;
  user-select: none;
  margin-left: -4px;

  display: flex;
  justify-content: space-between;
  column-gap: 93px;
  flex-wrap: wrap; 

  span {
    color: #ef5da8;
  }

  ${media.tablet(`
  font-size: 100px;
  column-gap: 50px;
 `)}

  ${media.mobile(`
  font-size: 56px;
  line-height: 72px;
  column-gap: 30px;
  `)}
  
`;