import styled from "styled-components";
import { primaryBlackLight, primaryWhite } from "@/styles/colors";

export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const IconBox = styled.a`
  display: flex;
  cursor: pointer;
  font-size: 4rem;
  color: ${primaryWhite};

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;
