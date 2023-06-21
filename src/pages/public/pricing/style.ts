import styled from 'styled-components';
import { GV } from 'utils/style.util';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    border: 1px solid ${GV('primary-opacity')};
    border-radius: 1rem;
    padding: 2.5rem 2rem 1.5rem;
    gap: 1.5rem;
    transition: all ease-in-out .2s;

    &:hover {
        box-shadow: 0 0 10px ${GV('primary')};
    }
`;

export const LogoWrapper = styled.div`
    height: 50px;

    @media (max-width: 768px) {
        display: none;
        height: 30px;
    }
`