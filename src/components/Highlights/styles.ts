import styled from "styled-components";


export const Container = styled.section`
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    height: 90vh;

    div {
        position: relative;
        
        .vodumLogo {
            max-width: 100%;
        }

        .offLogo {
            display: flex;
                align-items: center;

            width: 25%;

            position: absolute;
                bottom: -8%;
                right: 15%;

            .offLogo__byText {
                margin-top: 15%;
                width: 12%;
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