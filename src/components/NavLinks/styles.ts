import styled from "styled-components";


export const Container = styled.nav`

    padding: 1rem;

    position: absolute;
        right: 0;

    .socialLinks {
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        button {
            background: transparent;
            border: none;
            padding: 1rem;

            svg {
                height: 100%;
            }
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: .7rem;

            transition: transform 0.4s;

            img {
                width: 30px;
            }

            svg {
                width: 100%;
                
                path {
                    color: var(--color-dark);
                }
            }

            #iconManifold {
                width: 25px;
            }

            &:hover {
                transform: translate(0, -5px); 
            }
        }
    }
`;