import styled, { keyframes } from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${primaryWhite};
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  @media (max-width: 982px) {
    justify-content: unset;
    padding: 3rem 5rem;
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 100rem;
  justify-content: center;
  align-items: left;
  text-align: left;
  padding: 0 5rem 0 5rem;
  gap: 2rem;

  @media (max-width: 1125px) {
    gap: 0;
  }

  @media (max-width: 982px) {
    margin-top: 3rem;
    padding: 0;
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
  font-size: 3.5rem;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 500;
  color: ${primaryBlack};
  margin: 1rem 0;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  @media (max-width: 1310px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
