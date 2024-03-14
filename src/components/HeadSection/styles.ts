import styled, { keyframes } from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${primaryBlack};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;

export const Title = styled.h1`
  font-size: 7.4rem;
  font-family: "Poppins";
  font-weight: 200;
  color: ${primaryWhite};
  text-align: center;

  @media (max-width: 768px) {
    margin-top: -5rem;
    font-size: 5rem;
  }

  @media (max-width: 512px) {
    margin-top: -10rem;
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 4.8rem;
  font-family: "Poppins";
  font-weight: 100;
  color: ${primaryWhite};
  text-align: center;
  pointer-events: none;
  user-select: none;
  touch-action: none;
  text-decoration: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 512px) {
    font-size: 2.5rem;
  }
`;

export const ArrowBox = styled.div`
  position: absolute;
  height: 10rem;
  padding-top: 35rem;

  @media (max-width: 768px) {
    padding-top: 20rem;
  }

  @media (max-width: 512px) {
    padding-top: 10rem;
  }
`;

const jump = keyframes`
  0% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(1rem);
  }
`;

export const Arrow = styled(IoIosArrowDown)`
  color: ${primaryWhite};
  font-size: 6rem;
  margin-top: 2rem;
  animation: ${jump} 0.6s infinite 0s none alternate ease;
  opacity: 0.6;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 512px) {
    font-size: 4rem;
  }
`;
