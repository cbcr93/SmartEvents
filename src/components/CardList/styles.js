import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;

  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 380px;

  background: #ffffff;

  border-radius: 10px;
  border: 2ps solid #ffffff;

  transition: 0.5s;

  img {
    width: 200px;
    height: 200px;
    margin: 10px 50px;
  }

  hr {
    background: #f3f3f3;
    width: 100%;
    height: 2px;
    border: 0;
  }

  h3 {
    overflow: hidden;
    position: relative;
    line-height: 22px;
    max-height: 25px;
    width: 290px;
    text-align: justify;

    &:before {
      content: "...";
      position: absolute;
      right: 0px;
      bottom: 0;
      padding: 0 0px 0 0.25em;
    }
  }

  span {
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    padding: 10px 0;
    font-size: 18px;
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
