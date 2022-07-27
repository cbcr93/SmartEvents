import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;

  @media (min-width: 650px) {
    flex-direction: row;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  margin: 0 20px

  height: 200px;
  min-width: 300px;

  span {
    margin-bottom: 20px;
  }

  button {
    width: 200px;
    padding: 10px 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;

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
