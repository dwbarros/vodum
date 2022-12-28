import styled from "styled-components";


export const Content = styled.article`
    height: 180vh;
    width: 100%;

    position: relative;

    #imgVodumTitle {
        display: none;

        width: 20rem;
        
        position: absolute;
        top: 30%;
        left: 30%;
    }

    #imgTraits {
        width: 12rem;

        position: absolute;
        top: 25%;
        left: 20%;
    }

    #imgHandCrafted { 
        width: 15rem;

        position: absolute;
        top: 30%;
        right: 13%;
    }

    #imgWitchDr {
        width: 10rem;

        position: absolute;
        top: 50%;
        left: 12%;
    }

    @media (max-width: 1080px) {
        height: 180vh;
    }

    @media (max-width: 720px) {
        height: 130vh;
    }

    @media (max-width: 480px) {
        height: 100vh;
    }

    @media (max-width: 320px) {
        height: 80vh;
    }
`;