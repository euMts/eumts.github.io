import { primaryBlack, primaryRed, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: left;
  width: 100%;
  height: 100%;
  max-width: 50rem;
  min-width: 30rem;
  /* padding: 0 22rem; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: ${primaryBlack};
  padding-bottom: 1rem;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

interface UnderMessageProps {
  $isRed: string;
}

export const UnderMessage = styled.h2<UnderMessageProps>`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: ${(props) => (props.$isRed === "true" ? primaryRed : primaryBlack)};
  margin-top: 2rem;
`;
