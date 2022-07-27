import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 30px 10%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  align-content: center;
  justify-content: center;

  margin: 0 auto;

  width: 600px
  height: 600px;

  overflow-x: scroll;

  @media (min-width: 800px) {
    overflow-y: none;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
