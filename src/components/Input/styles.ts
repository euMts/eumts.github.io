import styled from "styled-components";
import { primaryBlack, primaryWhite } from "@/styles/colors";

export const MyInput = styled.input`
  width: 100%;
  height: 6rem;
  font-size: 2rem;
  padding: 2rem;
  background-color: ${primaryBlack};
  border-radius: 1rem;
  outline: none;
  border: none;
  color: ${primaryWhite};
  font-family: var(--font-inter), sans-serif;
  /* min-width: 70rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MyTextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;
  font-size: 2rem;
  padding: 2rem;
  background-color: ${primaryBlack};
  border-radius: 1rem;
  outline: none;
  color: ${primaryWhite};
  font-family: var(--font-inter), sans-serif;
  /* min-width: 70rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
