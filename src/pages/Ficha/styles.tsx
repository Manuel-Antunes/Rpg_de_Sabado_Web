import styled from "styled-components";

export const Container = styled.div`
    
`;
export const Cabecalho = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 600px;
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
export const Descricao = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  header{
      font-family: Arial, Helvetica, sans-serif;
      background-color:#191920;
      width:100%;
      text-align:center;
      color: #fff;
      font-weight: bold;
      padding: 10px;
      font-size: 30px;
  }
  .content {
    div {
      margin-right: 10px;
    }
    max-width: 540px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-size: 20px;
    label {
      font-weight: bold;
    }
    font-family: "Kalam", cursive;
    input {
      margin-left: 10px;
      border: none;
      border-bottom: 1px solid #fff;
      background: none;
      color: #c5c5c5;
    }
  }
`;
export const Attributes = styled.table`
  max-width: 600px;
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
