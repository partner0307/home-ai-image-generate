import { styled } from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 3rem 200px 0rem;
    height: 94vh;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 768px) {
        height: auto;
    }
`