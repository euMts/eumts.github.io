import styled from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* height: 10rem; */
  background-color: ${primaryBlack};
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  text-align: center;

  @media (max-width: 982px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  display: flex;
  font-size: 3.5rem;
  color: ${primaryWhite};
  font-family: var(--font-inter), sans-serif;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 982px) {
    display: none;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.5rem;
  color: ${primaryWhite};
  font-family: var(--font-inter), sans-serif;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
