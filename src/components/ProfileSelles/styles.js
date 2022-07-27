import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 30px 10%;

  section {
    display: flex;

    justify-content: space-around;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  margin: 20px auto;

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
