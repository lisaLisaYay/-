import styled from "styled-components";
import { media } from "../../styles/media";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  gap: 56px;
  width: 100%;
  padding-bottom: 15px;

  ${media.mobile(`
  flex-direction: column-reverse;
  gap:none;
  justify-content: space-between;
  max-height: 300px;
`)}
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.mobile(`
  gap:10px
`)}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: fit-content;
  position: relative;
  z-index: 11;

  ${media.mobile(`
  gap:10px
`)}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #42567a80;
  cursor: pointer;
  background: transparent;

  img {
    margin-left: -2px;
  }

  &.next-btn img {
    margin-left: 0;
    margin-right: -2px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  ${media.mobile(`
  height: 25px;
  width: 25px;

  img{
  height: 10px;}
`)}
`;

export const YearTitle = styled.h3`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  color: #3877ee;

  ${media.mobile(`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`)}
`;

export const YearInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  ${media.mobile(`
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;
`)}
`;

export const DotWrap = styled.div`
  justify-content: center;
  display: none;
  gap: 10px;
  margin-top: -20px;
  place-self: center;

  ${media.mobile(`
display: flex;
`)}
`;

export const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isCurrent',
})<{ isCurrent: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCurrent ? "black" : "grey")};
`;