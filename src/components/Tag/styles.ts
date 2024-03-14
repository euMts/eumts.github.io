import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${primaryBlack};
  flex-direction: row;
  width: fit-content;
  justify-content: left;
  align-items: center;
  margin-top: 0.5rem;
  flex-flow: wrap;
  gap: 0 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: fit-content;
  height: fit-content;
  background-color: ${primaryBlack};
  border: 0.2rem solid ${primaryWhite};
  border-radius: 1rem;
  opacity: 0.3;
  margin: 2rem 0 0 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${primaryWhite};
  font-weight: 500;
  text-align: center;
  padding: 1rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
