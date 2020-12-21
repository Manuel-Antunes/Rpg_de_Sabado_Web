import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  justify-content: center;
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
    width: 83%;
    h4 {
      color: #707070;
    }
    a {
      text-decoration: none;
      color: #e65100;
    }
    font-size: 4.5rem;
    max-width: 50rem;
    font-family: 'Kalam';
  }
`;
