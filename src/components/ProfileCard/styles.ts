import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${primaryBlack};
  max-width: 39rem;
  width: 100%;
  height: 100%;
  border-radius: 2rem 0 2rem 0;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

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
  padding: 3rem 0;

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
  gap: .5rem;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  color: ${primaryWhite};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.5rem;
  color: ${primaryWhite};
  font-family: "Inter", sans-serif;
  font-weight: 200;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubSubTitle = styled.p`
  font-size: 2rem;
  color: ${primaryWhite};
  font-family: "Inter", sans-serif;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
