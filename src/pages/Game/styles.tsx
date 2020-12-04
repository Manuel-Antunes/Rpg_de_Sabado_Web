import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr auto;
`;
export const Categorias = styled.div`
  background-color: #191920;
  border: #2f2f3b solid 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ul {
    width: 100%;
    background-color: #141419;
    li {
      span {
        margin-left: 20px;
        color: #e65100;
        font-size: 30px;
      }
    }
  }
  span {
    font-size: 50px;
    color: #e65100;
    text-align: center;
    font-family: 'Kalam', cursive;
  }
`;
export const Main = styled.div`
  .wrapper {
    height: 550px;

    overflow: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      background: ${darken(0.2, '#e65100')};
    }
    &::-webkit-scrollbar-thumb {
      background: #e65100;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
  ul {
    display: flex;
    border-bottom: 3px solid#2F2F3B;
    li {
      padding: 4px 0;
      padding-right: 80px;
      background-color: #141419;
      border: 3px solid #2f2f3b;
      border-bottom: none;
      margin-left: 10px;

      span {
        font-size: 20px;
        cursor: default;
        color: #e65100;
      }
    }
  }
`;
export const Jogadores = styled.div`
  background-color: #191920;
  border: #2f2f3b solid 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ul {
    width: 100%;
    li > * {
      padding: 5px 10px;
    }
    li {
      display: flex;
      border: solid 1px #707070;
      width: 100%;
      .profile {
        display: flex;
        align-items: center;
        font-size: 20px;
        background-color: #141419;
        color: #e65100;
        img {
          margin-right: 10px;
          border-radius: 50%;
          width: 50px;
        }
        span {
          font-size: 20px;
          text-shadow: -1px 0 #191920, 0 1px #191920, 1px 0 #191920,
            0 -1px #191920;
        }
      }
    }
  }
  span {
    font-size: 50px;
    color: #e65100;
    text-align: center;
    font-family: 'Kalam', cursive;
  }
`;
export const MenuBar = styled.div`
  grid-column: 1/4;
  display: flex;
  button {
    width: 20rem;
    img {
      width: 100%;
    }
  }
  justify-content: space-between;
`;
export const Fichas = styled.ul`
  li > * {
    margin-left: 30px;
  }
  li {
    margin: 0 4px;
    & + li {
      margin-top: 3px;
    }
    border: 1px solid #707070;
    background-color: #2f2f3b;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      border-radius: 50%;
    }
    label {
      color: #e65100;
      font-size: 20px;
      text-shadow: -1px 0 #191920, 0 1px #191920, 1px 0 #191920, 0 -1px #191920;
    }
  }
`;
export const Dices = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    button {
      background: none;
      border: none;
      width: 5rem;
      img {
        width: 100%;
      }
      span {
        font-size: 25px;
      }
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  span {
    font-size: 50px;
    color: #e65100;
    text-align: center;
    font-family: 'Kalam', cursive;
  }
`;
export const Chat = styled.div``;
