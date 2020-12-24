import { createGlobalStyle } from 'styled-components';

import background from '../resources/images/background.svg';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-size: 62.5%;

      @media (max-width: 2560px) {
        font-size: 117.5%;
      }

      @media (max-width: 1920px) {
        font-size: 86.5%;
      }

      @media (max-width: 1600px) {
        font-size: 70.5%;
      }

      @media (max-width: 1440px) {
        font-size: 69.5%;
      }

      @media (max-width: 1366px) {
        font-size: 57.5%;
      }

      @media (max-width: 800px) {
        font-size: 39.5%;
      }

      @media (max-width: 640px) {
        font-size: 26.5%;
      }

      @media (orientation: portrait) {
        @media (min-width: 540px) {
          font-size: 47.5%;
        }

        @media (min-width: 720px) {
          font-size: 65.5%;
        }

        @media (min-width: 1080px) {
          font-size: 100%;
        }

        @media (min-width: 1440px) {
          font-size: 136.5%;
        }
      }

      ::-webkit-scrollbar {
        width: 0.5rem;

      }
      ::-webkit-scrollbar-thumb {
        background: #191920;
        box-shadow: inset 0 0 0.6rem rgba(0,0,0,0.5);
      }
    }

    html,body, #root{
        height: 100%;
    }

    body{
        background: #191920 url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;

    }

    body, input, button{
        font: 1.4rem sans-serif;
    }

    #root {
        /* max-width: 102rem */
        margin: 0 auto;
        padding: 0 2rem 5rem;
    }

    button {
        cursor: pointer;
    }
`;
