import styled from 'styled-components';
import { GV } from 'utils/style.util';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: 1px solid ${GV('primary-opacity')};
    border-radius: 1rem;
    padding: 2.5rem 1.5rem 1.5rem;
    gap: 0.5rem;
    height: 100%;
    transition: all ease-in-out .2s;

    &:hover {
        box-shadow: 0 0px 30px ${GV('primary-opacity')};
    }
`;

export const LogoWrapper = styled.div`
    height: 50px;

    @media (max-width: 768px) {
        display: none;
        height: 30px;
    }
`