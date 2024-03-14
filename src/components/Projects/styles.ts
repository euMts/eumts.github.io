import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 3rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  padding: 0 5rem;
  
  @media (max-width: 982px) {
    align-items: center;
    flex-direction: column;
  }
`;
