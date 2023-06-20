import { styled } from "styled-components";

export const MainContainer = styled.main`
    padding: 3rem 200px 2rem;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 768px) {
        height: auto;
    }
`