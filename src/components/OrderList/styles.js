import styled from "styled-components";

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
  height: 380px;

  background: #ffffff;

  border-radius: 10px;
  border: 2px solid #ffffff;

  transition: 0.5s;

  hr {
    background: #f3f3f3;
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
