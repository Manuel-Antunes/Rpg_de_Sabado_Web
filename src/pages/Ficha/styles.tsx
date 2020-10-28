import styled from "styled-components";

export const Container = styled.div``;
export const Cabecalho = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  font-family: "Kalam", cursive;
  div {
    font-size: 20px;
    display: flex;
    flex-direction: column-reverse;
    label {
      color: #fff;
      font-weight: bold;
    }
    input {
      height: 30px;
      background: none;
      border-top: none;
      border-left: none;
    }
    input[type="number"] {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
export const Attributes = styled.table`
  tr {
    td {
      & + td {
        padding-top: 10px;
      }
      & + td {
        padding-left: 20px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #191920;
        h1 {
          font-weight: bold;
        }
      }
      input {
        height: 55px;
        width: 60px;
        text-align: center;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;

