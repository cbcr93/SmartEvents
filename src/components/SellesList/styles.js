import styled from "styled-components";

export const ContainerOrder = styled.div`
  position: relative;
  max-height: 500px;
  overflow-x: scroll;

  section {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerMap = styled.div``;

export const ContainerDetail = styled.div`
  padding-left: 20px;

  h3 {
    overflow: hidden;
    position: relative;
    width: 290px;
    text-align: justify;
  }

  p {
  }

  span {
    margin-bottom: 10px;
    text-align: justify;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 420px;

  background: #ffffff;

  border-radius: 10px;
  border: 2px solid #f0f0f0;

  transition: 0.5s;

  &:hover {
    background: #f3f3f3;
    color: #fd377e;
    border: 2px solid #fd377e;
  }

  p {
    overflow: hidden;
    height: 20px;
    width: 266px;
  }

  h3 {
    overflow: hidden;
    height: 28px;
    width: 266px;
  }

  hr {
    width: 100%;
    height: 2px;
    border: 0;
  }

  img {
    width: 200px;
    height: 100px;
  }
  button {
    width: 100%;
    padding: 10px 0;
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
