import styled from "styled-components";


export const Container = styled.header`
    display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 10vh;
        padding: 0 1rem;

    .socialLinks {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            background: transparent;
            border: none;
            padding: 1rem;

            img {
                width: 100%;
            }

            svg {
                height: 100%;

                path {
                    color: var(--color-dark);
                }
            }
        }
    }
`;