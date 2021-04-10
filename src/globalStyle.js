import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat',sans-serif;
    }

    html, body{
        scroll-behavior: smooth;
        overflow-x: hidden;
        background-color: #5a280b52;
    }
`;

export default GlobalStyle;