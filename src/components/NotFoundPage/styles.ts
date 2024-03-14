import { primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: var(--font-inter), sans-serif;
  font-weight: 600;
  color: ${primaryWhite};
  padding-bottom: 1rem;
`;
