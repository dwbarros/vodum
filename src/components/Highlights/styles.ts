import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 90vh;
    padding: 4rem;

    .vodumLogo {
        max-width: 100%;
    }

    .offLogo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 100%;
        transform: translateY(-30px);

        .offLogo__by_text {
            max-width: 100%;
            width: 5%;
            margin-top: 1rem;
        }

        .offLogo__link {
            max-width: 100%;
            margin-left: .5rem;
        }

        a {
            width: 30%;
            max-width: 100%;
        }
    }
`;