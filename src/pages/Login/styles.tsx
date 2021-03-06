import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  justify-content: center;

  @media (orientation: landscape) and (min-width: 1130px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
  }

  form {
    margin-top: 6rem;

    .buttons {
      margin-top: 65px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      span {
        width: 6rem;
      }
    }
  }

  .footer {
    margin-top: 7rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media (orientation: landscape) and (min-width: 1130px) {
      margin: 0;
      margin-top: 3rem;
    }

    h4 {
      color: #707070;
      font-size: 2rem;
    }

    a {
      text-decoration: none;
      color: #e65100;
      font-size: 2.4rem;
    }

    font-size: 4.5rem;
    max-width: 50rem;
    font-family: 'Kalam';
  }
`;

export const MeuBotao = styled.button`
  width: 9rem;
  height: 5rem;
  background-color: #fff;
  border: 0.1rem black solid;
`;
