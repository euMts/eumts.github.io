import styled, { keyframes } from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${primaryWhite};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;

  @media (max-width: 982px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  @media (max-width: 982px) {
    flex-direction: column;
  }
`;

interface BoxProps {
  $isSecond?: boolean;
}

export const Box = styled.div<BoxProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding: 0 8rem;

  @media (max-width: 982px) {
    display: ${(props) => (props.$isSecond ? "none" : "flex")};
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  color: ${primaryBlack};
  text-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 4rem;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 500;
  color: ${primaryBlack};
  margin: 1rem 0;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  @media (max-width: 1100px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Divider = styled.div`
  width: 0.4rem;
  height: 90%;
  background-color: ${primaryBlack};
  border-radius: 50rem;
`;
