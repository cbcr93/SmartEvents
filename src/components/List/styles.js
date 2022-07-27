import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 30px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
