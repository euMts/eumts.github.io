import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  width: 100%;
  max-width: 60rem;
  background-color: ${primaryBlack};
  margin: 0 3rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${primaryWhite};
  font-weight: 600;
  text-align: left;
  padding: 2rem 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: ${primaryWhite};
  font-weight: 400;
  text-align: left;
  padding: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

interface ScreenshotProps {
  src: string;
  bgright: boolean;
}

export const Screenshot = styled.div<ScreenshotProps>`
  display: flex;
  width: 100%;
  height: 35rem;
  background-color: ${primaryWhite};
  border-radius: 2rem 0 2rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) => (props.bgright ? "right" : "center")};
`;
