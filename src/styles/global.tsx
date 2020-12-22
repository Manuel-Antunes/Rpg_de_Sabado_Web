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
