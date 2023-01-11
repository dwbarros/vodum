import styled from "styled-components";


export const Container = styled.footer`
    display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10vh;

    .offLogo {
        width: 120px;
        max-width: 20%;

        img {
            width: 100%
        }
    }

    .socialLinks {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 40px;
            width: 100%;

            transition: transform 0.4s;
            
            img {
                width: 100%;
            }

            svg {
                height: 100%;

                path {
                    color: var(--color-dark);
                }
            }

            & + a {
                margin-left: 1rem;
            }

            &:hover {
                transform: translate(0, -5px); 
            }
        }
    }
`;