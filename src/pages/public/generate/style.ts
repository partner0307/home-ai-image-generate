import styled from 'styled-components';

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 1rem;

    > div {
        height: 100% !important;
    }

    @media (max-width: 768px) {
        flex: initial;
    }
`