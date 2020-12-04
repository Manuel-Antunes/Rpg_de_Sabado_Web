import { createGlobalStyle } from "styled-components";

import background from "../resources/images/background.svg";
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
    *{
        ::-webkit-scrollbar {
            width: 5px;
            
        }
        ::-webkit-scrollbar-thumb {
            background: #191920; 
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }   
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }
    html,body, #root{
        height: 100%;
    }
    body{
        background: #191920 url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;

    }
    body, input, button{
        font: 14px sans-serif;
    }
    #root {
        /* max-width: 1020px; */
        margin: 0 auto;
        padding: 0 20px 50px;
    }
    button {
        cursor: pointer;
    }
`;
