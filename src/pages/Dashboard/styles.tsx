import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 1rem 0 10rem 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  section {
    width: 75%;
    max-width: 54rem;
  }

  input {
    width: 100%;
    height: 7rem;
    font-size: 3rem;
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
    font-size: 3rem;
    text-align: center;
  }
  button {
    font-family: cursive;
    font-size: 3rem;
    border: none;
    color: #191920;
    background: #e65100;
  }
`;

export const UserContainer = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  top: 0;
  right: 0;

  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }

  label {
    font-size: 1rem;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 54rem;
  align-items: center;

  label {
    font-family: Kalam, cursive, sans-serif;
    font-size: 2rem;
    align-self: flex-start;
  }

  input {
    height: 4rem;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    height: 4rem;
    font-size: 2.5rem;
    font-family: 'Kalam';
  }
`;

export const TableList = styled.ul`
  overflow: auto;
  overflow-y: scroll;
  height: 80vh;
  list-style: none;
  background: #141419;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background: ${darken(0.2, '#e65100')};
  }

  &::-webkit-scrollbar-thumb {
    background: #e65100;
    -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
  }

  li {
    & + li {
      margin-top: 2.2rem;
    }

    button.clicable {
      background: #fff;
      width: 8rem;
      height: 8rem;
    }

    border: solid 0.1rem #707070;
    background-color: #191920;
    display: flex;
    padding-right: 5rem;
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
      font-size: 2rem;
    }

    div {
      span {
        align-self: center;
        margin-right: 4rem;
      }
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

export const LogOutButton = styled.button`
  width: 30%;
  height: 5rem;
  border-radius: 5rem;
  max-width: 25rem;
  margin-top: 1.5rem;
`;
