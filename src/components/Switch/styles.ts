import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

interface ContainerProps {
  $donationPage?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  right: 0;
  top: 0;
  margin: 5rem 20rem 0 0;

  @media (max-width: 1115px) {
    margin: 4rem 10rem 0 0;
  }

  @media (max-width: 982px) {
    position: relative;
    flex-direction: column;
    margin: ${(props) => (!props.$donationPage ? "0 0 2rem 0" : "-1.5rem 0 0 0")};
  }
`;

interface WrapperInterface {
  $isActive: boolean;
}

export const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  width: 100%;
  width: 9rem;
  height: 4.5rem;
  background-color: ${primaryBlack};
  border-radius: 10rem;
  justify-content: ${(props) =>
    props.$isActive === true ? "flex-end" : "flex-start"};
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Ball = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${primaryWhite};
  border-radius: 100%;
  border: 0.7rem solid ${primaryBlack};
`;

export const Text = styled.h2`
  font-size: 2rem;
  color: ${primaryBlack};
  font-weight: 700;
  text-align: center;
  padding: 1rem 1.5rem;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
