import styled from "styled-components";


export const Container = styled.section`
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    height: 90vh;
    padding: 2rem;

    div {
        position: relative;
        
        .vodumLogo_button {
            background: transparent;
            border: none;
        }

        .vodumLogo {
            max-width: 100%;
        }

        .offLogo {
            display: flex;
                align-items: center;

            width: 30%;

            position: absolute;
                bottom: -12%;
                right: 8%;

            .offLogo__byText {
                margin-top: 15%;
                width: 17%;
            }

            .offLogo__off1566Link {
                width: 88%;

                img {
                    margin-left: 10%;
                    width: 100%;
                }
            }
        }
    }
`;