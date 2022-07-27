import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 700px) {
    min-height: 100vh;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }
`;

export const ContainerCart = styled.div`
  background: #ffffff;

  max-width: 600px;
  margin: 30px 10px;
  padding: 20px;

  position: relative;

  hr {
    border: 0;
    height: 2px;
  }
  @media (min-width: 700px) {
    max-height: 800px;
  }

  @media (min-width: 1024px) {
    margin-right: 100px;
  }
`;
export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
}
`;

export const ContainerProduct = styled.section`
  @media (min-width: 600px) {
    max-height: 600px;
    overflow-y: scroll;
  }
`;

export const ContainerTotal = styled.div`
  background: #ffffff;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  width: 300px;
  height: 300px;
  margin: 30px 10px;
  padding: 20px;

  position: relative;

  button {
    width: 100%;
    padding: 10px 0;
    margin: 10px 0 30px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    border-radius: 5px;

    background: #fd377e;
    color: #fff;
    border: 2px solid #fd377e;
    transition: 0.5s;

    &:hover {
      background: #fff;
      color: #fd377e;
      border: 2px solid #fd377e;
    }
  }
`;

export const ContainerLinerButtom = styled.div`
  background: #e3e3e3;
  width: 100%;
  height: 5px;

  position: absolute;
  left: 0px;
  bottom: 0;
`;
