import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #111213;

  padding: 1.5rem 0;

  div {
    display: flex;
    align-items: center;

    margin-left: 2rem;

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;

      margin-right: 2rem;
    }

    h1 {
      font-size: 3rem;
      color: #e65100;
      font-family: Kalam, cursive, sans-serif;
      font-weight: normal;
    }
  }

  svg {
    margin-right: 5rem;
  }
`;

export const GameDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr auto;
`;

export const Categorias = styled.div`
  height: 42rem;
  background-color: #191920;
  border: #2f2f3b solid 1.5rem;
  border-radius: 0.9rem 0.9rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 1rem;

  span {
    font-size: 3rem;
    color: #e65100;
    text-align: center;
    font-family: 'Kalam', cursive;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-items: left;
    width: 100%;
    background-color: #141419;

    li {
      list-style-type: none;

      span {
        margin-left: 2rem;
        color: #e65100;
        font-size: 2rem;
      }
    }
  }

  > ul {
    overflow: auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.5rem;
      background: ${darken(0.2, '#e65100')};
    }

    &::-webkit-scrollbar-thumb {
      background: #e65100;
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Fichas = styled.ul`
  li > * {
    margin-left: 1rem;
  }

  li {
    margin: 0 0.4rem;

    & + li {
      margin-top: 0.3rem;
    }

    &:hover {
      cursor: pointer;
      border-color: #e65100;
    }

    border: 0.1rem solid #707070;
    background-color: #2f2f3b;
    display: flex;
    align-items: center;

    img {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
    }

    label {
      color: #e65100;
      font-size: 1.5rem;
      text-shadow: -0.1rem 0 #191920, 0 0.1rem #191920, 0.1rem 0 #191920,
        0 -0.1rem #191920;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Main = styled.div`
  height: 42rem;
  border-radius: 0.9rem;

  ul {
    display: flex;
    border-bottom: 0.3rem solid #2f2f3b;
    overflow-x: scroll;
    overflow-y: hidden;
    max-width: 73rem;
    height: 4.2rem;
    padding: 0;

    &::-webkit-scrollbar {
      height: 0.5rem;
      background: ${darken(0.2, '#e65100')};
    }

    &::-webkit-scrollbar-thumb {
      background: #e65100;
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
    }

    li {
      display: flex;
      justify-content: space-between;

      padding: 0.4rem 0;
      background-color: #141419;
      border: 0.3rem solid #2f2f3b;
      border-bottom: none;
      border-radius: 0 1rem 0 0;

      span {
        font-size: 2rem;
        cursor: default;
        color: #e65100;
        margin-left: 0.5rem;
        margin-right: 5rem;
        width: max-content;
      }

      svg {
        margin-right: 0.5rem;

        &:hover {
          cursor: pointer;

          path {
            color: #e65100;
          }
        }

        path {
          color: #2f2f3b;

          &:hover {
            color: #e65100;
            cursor: pointer;
          }

          & + path {
            color: #e65100;
          }
        }
      }
    }

    li + li {
      margin-left: 0.5rem;
    }
  }

  > div {
    border-top: #2f2f3b solid 1.5rem;
    border-bottom: #2f2f3b solid 1.5rem;

    overflow: auto;
    overflow-y: scroll;
    height: 37.8rem;

    &::-webkit-scrollbar {
      width: 5px;
      background: ${darken(0.2, '#e65100')};
    }

    &::-webkit-scrollbar-thumb {
      background: #e65100;
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Jogadores = styled.div`
  height: 42rem;
  background-color: #191920;
  border: #2f2f3b solid 1.5rem;
  border-radius: 0.9rem 0.9rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 2.5rem;
    color: #e65100;
    text-align: center;
    font-family: 'Kalam', cursive;
    margin-top: 1rem;
  }

  ul {
    width: 100%;

    &::-webkit-scrollbar {
      width: 5px;
      background: ${darken(0.2, '#e65100')};
    }

    &::-webkit-scrollbar-thumb {
      background: #e65100;
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
    }

    li > * {
      padding: 0.5rem 1rem;
    }

    li {
      display: flex;
      border: solid 0.1rem #707070;
      width: 100%;
      justify-content: space-between;

      .profile {
        display: flex;
        align-items: center;
        font-size: 2rem;
        background-color: #141419;
        color: #e65100;

        img {
          margin-right: 1rem;
          border-radius: 50%;
          width: 4rem;
        }

        span {
          font-size: 1.5rem;
          text-shadow: -0.1rem 0 #191920, 0 0.1rem #191920, 0.1rem 0 #191920,
            0 -0.1rem #191920;
        }
      }

      .campos {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;

        padding: 0 0.5rem 0.5rem 0.5rem;

        max-width: 10rem;

        span {
          margin: 0;
          font-size: 1.5rem;
        }

        p {
          color: #e65100;
          font-size: 0.7rem;
          font-family: Roboto, sans-serif;
          align-self: flex-start;
        }

        progress {
          width: 100%;
          height: 0.5rem;
          background: none;

          &::-webkit-progress-bar {
            background-color: #eee;
            border-radius: 0.2rem;
            box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.25) inset;
          }

          &::-webkit-progress-value {
            background: #e65100;
          }
        }
      }
    }
  }
`;

export const MenuBar = styled.div`
  grid-column: 1/4;
  display: flex;

  border: #2f2f3b solid 1.5rem;
  border-top: 0;

  button {
    width: 13rem;
    height: 100%;
    background: #14141a;
    border: none;

    img {
      height: 12rem;
      width: 12rem;
      border-radius: 50%;
    }
  }
  justify-content: space-between;
`;

export const Dices = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #111213;

  margin: 0.2rem;
  border: 0.1rem solid #707070;

  span {
    font-size: 2rem;
    color: #e65100;
    text-align: center;
    font-family: Roboto, cursive;
    margin: 1rem 0 2rem 0;
  }

  div {
    display: flex;

    justify-content: center;

    button {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;

      background: none;
      border: none;
      max-width: 6rem;
      max-height: 6rem;
      margin-bottom: 3rem;

      img {
        border-radius: 0;
        width: 5rem;
        height: 5rem;
      }

      span {
        font-size: 1.3rem;
        margin: 0;
      }
    }
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0.2rem;
  border: 0.1rem solid #707070;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;

    background: #2f2f3b;

    ul {
      display: flex;
      flex-direction: column;
      flex: 1;

      max-height: 11.6rem;
      padding: 0.5rem 1rem;
      overflow: auto;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 5px;
        background: ${darken(0.2, '#e65100')};
      }

      &::-webkit-scrollbar-thumb {
        background: #e65100;
        box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
      }

      li {
        list-style: none;

        span {
          color: #e65100;
          font-size: 1rem;
          font-family: Roboto, sans-serif;
        }
      }
    }
  }

  textarea {
    height: 3rem;
    resize: none;

    background: #111213;
    color: #e65100;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;

    &::placeholder {
      color: #e65100;
      font-size: 1.5rem;
      font-family: Roboto, sans-serif;
    }

    border: 0;
    border-top: 0.1rem solid #2f2f3b;
  }
`;
