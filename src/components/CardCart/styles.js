import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  margin: 10px 0;

  img {
    width: 200px;
    height: 200px;
  }
`;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  align-content: center;

  height: 100px;

  span {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    padding: 10px 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    border-radius: 5px;

    background: #67abd8;
    color: #fff;
    border: 2px solid #67abd8;
    transition: 0.5s;

    &:hover {
      background: #fff;
      color: #67abd8;
      border: 2px solid #67abd8;
    }
  }
`;
