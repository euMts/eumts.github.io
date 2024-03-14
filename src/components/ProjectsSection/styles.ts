import styled from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${primaryBlack};
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  color: ${primaryWhite};

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
