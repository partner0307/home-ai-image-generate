import { styled } from "styled-components";

export const ImageRowContainer = styled.div`
    flex: 1;
    display: flex;
    gap: 2rem;
    overflow: hidden;

    > div {
        height: 100%;
        overflow: hidden;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            flex: 1;
            overflow: hidden;

            > img {
                height: 100%;
            }
        }
    }
`