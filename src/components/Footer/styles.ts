import styled from "styled-components";

export const Container = styled.footer`
    background: var(--color-purple);
    padding: 2rem 2rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            border: 1px solid var(--color-light);
            border-radius: 100%;
            color: var(--textColor-title);
            height: 48px;
            width: 48px;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: transform 0.4s;

            img {
                width: 100%;
            }

            & + a {
                margin-left: 1rem;
            }

            &:hover {
                transform: translate(0, -5px); 
            }
        }
    }

    a {
        height: 100px;

        & > img {
            height: 100%;
            width: 100%;
        }
    }
`;