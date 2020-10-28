import { createGlobalStyle } from "styled-components";
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
    }
    html,body, #root{
        height: 100%;
    }
    body{
        background-image: linear-gradient(90deg, #40326b, #191920);
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font: 14px sans-serif;
    }
    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }
    button {
        cursor: pointer;
    }
`;
