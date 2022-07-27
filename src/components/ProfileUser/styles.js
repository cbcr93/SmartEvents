import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 10px 0;

  button {
    width: 200px;
    padding: 10px 0;
    font-size: 12px;
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
