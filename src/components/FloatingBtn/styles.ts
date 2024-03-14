import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

interface ContainerProps {
  $visible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 6rem;
  height: 6em;
  bottom: 0;
  right: 0;
  margin: 6rem 8rem;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 982px) {
    margin: 10rem 3rem;
  }
`;

export const Wrapper = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${primaryBlack};
  cursor: ${(props) => (props.$visible ? "pointer" : "default")};
  justify-content: center;
  align-items: center;
  border: 2px solid ${primaryWhite};
`;

export const Arrow = styled(IoIosArrowUp)`
  color: ${primaryWhite};
  font-size: 4.5rem;
`;
