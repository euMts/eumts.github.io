import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${primaryBlack};
  max-width: 39rem;
  width: 100%;
  border-radius: 2rem 0 2rem 0;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    height: 50rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem 1rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const Picture = styled.div`
  display: flex;
`;

export const OuterBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  gap: 0.5rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${primaryWhite};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
export const SubTitle = styled.h2`
  padding: 0 1rem;
  font-size: 2rem;
  color: ${primaryWhite};
  font-family: "Inter", sans-serif;
  font-weight: 300;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
