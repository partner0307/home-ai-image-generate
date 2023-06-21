import styled from 'styled-components';

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    border-radius: 1rem;
    overflow: hidden;

    > div {
        > img {
            height: 100%;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex: initial;
    }
`