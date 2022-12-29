import styled from "styled-components";


export const Content = styled.figure`
    position: relative;
    
    img {
        height: 150vh;
        overflow: hidden;

        position: absolute;
            left: 50%;

        transform: translate(-50%, -65vh);
    }

    #imgVodumTitle {
        height: auto;
        width: 182px;

        top: 65vh;
        
        transform: translate(-57%, -78vh);
    }
`;