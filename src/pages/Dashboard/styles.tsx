import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  div.userContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }
  input {
    width: 100%;
    height: 70px;
    font-size: 3em;
    text-align: center;
    letter-spacing: 0.5rem;
  }
  label {
    font-family: cursive;
    color: #e65100;
    font-size: 2.3em;
  }
  h3 {
    font-family: cursive;
    color: #e65100;
    font-size: 3em;
    text-align: center;
  }
  button {
    height: 70px;
    font-family: cursive;
    font-size: 3em;
    border: none;
    color: #191920;
    width: 100%;
    background: #e65100;
  }
  button.logout {
    margin-top: 20px;
  }
`;

export const TableList = styled.ul`
  overflow: auto;
  overflow-y: scroll;
  height: 80vh;
  list-style: none;
  background: #141419;
  &::-webkit-scrollbar {
    width: 5px;
    background: ${darken(0.2, "#e65100")};
  }
  &::-webkit-scrollbar-thumb {
    background: #e65100;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  li {
    & + li {
      margin-top: 22px;
    }
    button.clicable {
      background: #fff;
      width: 80px;
      height: 80px;
    }
    border: solid 1px #707070;
    background-color: #191920;
    display: flex;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
    button {
      background: none;
      border: none;
    }
    span,
    a {
      text-decoration: none;
      color: #e65100;
      background: none;
      border: none;
      font-size: 2em;
    }
    img.logo {
      width: 100%;
    }
    div {
      width: 15%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

