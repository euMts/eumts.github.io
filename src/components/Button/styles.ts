import { primaryBlack, primaryBlackLight, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const MyButton = styled.button`
  border-radius: 1rem;
  background-color: ${primaryBlack};
  font-family: var(--font-inter), sans-serif;
  padding: 1rem 1.5rem;
  font-weight: 700;
  color: ${primaryWhite};
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-color: ${primaryBlackLight};
  }

  &:active {
    transform: translateY(0.2rem);
  }
`;
