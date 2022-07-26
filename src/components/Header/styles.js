import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: #ffffff;
  margin: 0 auto;
  min-width: 300px;

  strong {
    color: #fd377e;
  }

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px;

  h3 {
    padding: 10px 5px;
    cursor: pointer;
  }
`;

export const ContainerCart = styled.div`
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
