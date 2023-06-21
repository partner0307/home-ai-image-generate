import { styled } from "styled-components";

export const MainContainer = styled.main<{background: string}>`
    background: url(${props => props.background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 3rem 200px 0rem;
    height: 100vh;
    padding-bottom: 4rem;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 768px) {
        height: auto;
    }
`