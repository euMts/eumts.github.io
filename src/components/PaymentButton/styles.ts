import {
  primaryBlack,
  primaryBlue,
  primaryWhite,
  secondaryBlue,
} from "@/styles/colors";
import { SiMercadopago } from "react-icons/si";
import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  background-color: ${primaryBlack};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  cursor: pointer;
  text-decoration: none;
`;

interface WrapperProps {
  $paypal: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  min-width: fit-content;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => (props.$paypal ? secondaryBlue : primaryBlue)};
  border-radius: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${primaryWhite};
  font-weight: 500;
  text-align: center;
  padding: 0 0 0 0.5rem;
  text-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
