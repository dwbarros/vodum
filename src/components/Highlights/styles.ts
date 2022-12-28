import styled from "styled-components";


export const Container = styled.section`

    & > img {
        display: block;
        width: 85%;
        margin: 0 auto;
        padding: 2rem 0 1rem;

        @media (max-width: 1080px) {

        }

        @media (max-width: 720px) {
            padding: 6rem 0 4rem;
        }

        @media (max-width: 480px) {
            padding: 12rem 0 8rem;
        }

        @media (max-width: 320px) {
            padding: 15rem 0 10rem;
        }
    }
`;