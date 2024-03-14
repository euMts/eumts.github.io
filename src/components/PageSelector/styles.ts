import { primaryBlack, primaryWhite } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.ul`
  display: flex;
  width: fit-content;
  height: fit-content;
  background-color: ${primaryBlack};
  margin: 6rem 0 0 0;
`;

interface ItemProps {
  isSelected: boolean;
}

export const Item = styled.li<ItemProps>`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.isSelected ? primaryBlack : primaryWhite};
  border: 0.3rem solid ${primaryWhite};
  text-align: center;
  border-radius: 100%;
  margin: 0 1rem;
`;
