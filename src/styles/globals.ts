import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: var(--color-purple);
        --color-secondary: var(--color-green);
        --color-light: #F8F8F8;
        --color-dark: #060211;

        --color-purple: #0b061a;
        --color-purple-800: #2E0F59;
        --color-purple-400: #42208C;

        --color-green: #6FE76D;

        --color-blue-500: #2656AE;
        --color-blue-300: #76CDE9;
        
        --color-grey: #181B30;
        --color-grey-900: #222d4b;
        --color-grey-800: #1F2029;
        --color-grey-700: #353646;
        --color-grey-600: #4B4D63;
        --color-grey-500: #616480;
        --color-grey-400: #797D9A;
        --color-grey-300: #9699B0;
        --color-grey-200: #B3B5C6;
        --color-grey-100: #D1D2DC;
        --color-grey-50: #EEEEF2;


        --background: var(--color-secondary);
;
        --shape: var(--color-primary);

        --button-bg: var(--color-purple-400);
        --button-border: var(--color-purple-800);

        --textColor-title: var(--color-primary);
        --textColor-body: var(--color-primary);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--textColor-body);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Popins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ul, ol, li {
        list-style: none;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`