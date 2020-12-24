import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #7159c1;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  #profile {
    background: #fff;
    width: 30rem;
    height: 30rem;
  }
`;

export const Cabecalho = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  max-width: 60rem;
  font-family: 'Kalam', cursive;
  div {
    font-size: 2rem;
    display: flex;
    flex-direction: column-reverse;
    label {
      font-weight: bold;
    }
    input {
      height: 2rem;
      width: 120%;
      background: none;
      border: none;
      border-bottom: 0.1rem solid #191920;
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
  max-width: 50rem;
  flex-direction: column;
  align-items: center;

  header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #191920;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
    font-size: 3rem;
  }

  .content {
    div {
      margin-right: 1rem;
    }
    max-width: 54rem;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-size: 2rem;

    label {
      font-weight: bold;
    }

    font-family: 'Kalam', cursive;

    input {
      margin-left: 1rem;
      border: none;
      width: auto;
      border-bottom: 0.1rem solid #fff;
      background: none;
      color: #c5c5c5;
    }
  }
`;

export const Experiencia = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
  display: flex;
  flex-direction: column;
  max-width: 50rem;

  header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #191920;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
    font-size: 3rem;
  }

  .content {
    max-width: 54rem;
    display: flex;
    color: #fff;
    flex-direction: column;
    font-size: 2rem;

    div {
      margin-right: 1rem;
    }

    label {
      float: left;
      font-weight: bold;
    }

    font-family: 'Kalam', cursive;

    input {
      border: none;
      width: 100%;
      border-bottom: 0.1rem solid #fff;
      background: none;
      color: #c5c5c5;
    }
  }
`;

export const PericiasComArmas = styled.table`
  font-family: 'Kalam', cursive;
  width: 42rem;

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
      font-size: 2rem;
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
  max-width: 60rem;

  tr {
    td {
      & + td {
        padding-top: 1rem;
      }

      & + td {
        padding-left: 2rem;
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
        width: 6rem;
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
      width: 15rem;
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
        font-size: 2rem;
        height: 5rem;
        width: 8rem;
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
    font-size: 3rem;
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
    padding: 0.2rem 2rem;
    border-bottom: 0.1rem solid #191920;
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
