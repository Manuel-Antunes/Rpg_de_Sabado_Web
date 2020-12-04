import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #7159c1;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  #profile {
    background: #fff;
    width: 300px;
    height: 300px;
  }
`;
export const Cabecalho = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  max-width: 600px;
  font-family: 'Kalam', cursive;
  div {
    font-size: 20px;
    display: flex;
    flex-direction: column-reverse;
    label {
      font-weight: bold;
    }
    input {
      height: 20px;
      width: 120%;
      background: none;
      border: none;
      border-bottom: 1px solid #191920;
    }
    input[type='number'] {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
export const Descricao = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #191920;
    width: 100%;
    text-align: center;
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
    font-family: 'Kalam', cursive;
    input {
      margin-left: 10px;
      border: none;
      width: auto;
      border-bottom: 1px solid #fff;
      background: none;
      color: #c5c5c5;
    }
  }
`;

export const Experiencia = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
  display: flex;
  flex-direction: column;
  max-width: 500px;
  header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #191920;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    font-size: 30px;
  }
  .content {
    max-width: 540px;
    display: flex;
    color: #fff;
    flex-direction: column;
    font-size: 20px;
    div {
      margin-right: 10px;
    }
    label {
      float: left;
      font-weight: bold;
    }
    font-family: 'Kalam', cursive;
    input {
      border: none;
      width: 100%;
      border-bottom: 1px solid #fff;
      background: none;
      color: #c5c5c5;
    }
  }
`;

export const PericiasComArmas = styled.table`
  font-family: 'Kalam', cursive;
  width: 420px;
  header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #191920;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    h1 {
      font-weight: bold;
      font-size: 20px;
    }
  }
  tr {
    td {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-size: 13px;
      }
      button,
      input {
        height: 25px;
        width: 100%;
        margin: 0;
        padding: 0;
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
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  .field {
    display: flex;
    justify-content: space-between;
    .label {
      text-align: center;
      color: #fff;
      align-self: flex-end;
      padding: 3px;
      width: 150px;
      background-color: #191920;
      h2 {
        font-weight: bold;
      }
      h3 {
        font-family: 'Kalam', cursive;
      }
    }
    .formGroup {
      text-align: center;
      display: flex;
      flex-direction: column;
      label {
        font-family: 'Kalam', cursive;
        font-weight: bold;
        font-size: 130%;
      }
      input {
        text-align: center;
        font-family: 'Henny Penny', cursive;
        font-size: 20px;
        height: 50px;
        width: 80px;
      }
      input[type='number'] {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;
export const Protecoes = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-family: 'Henny Penny', cursive;
    font-size: 30px;
  }
  h4 {
    font-family: 'Kalam', cursive;
  }
  div {
    display: flex;
    align-items: center;
  }
  input {
    border: none;
    background: none;
    width: 200%;
    padding: 2px 20px;
    border-bottom: 1px solid #191920;
  }
  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    width: 100%;
  }
`;
