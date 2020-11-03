import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 0;
  justify-content: center;
  form {
    margin-top: 50px;
    .buttons {
      margin-top: 65px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      span {
        width: 60px;
      }
    }
  }
  .footer {
    margin-top: 70px;
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
    font-size: 20pt;
  }
`;
