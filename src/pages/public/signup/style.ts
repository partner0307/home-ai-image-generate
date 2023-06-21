import styled from 'styled-components';
import { GV } from 'utils/style.util';

export const ContactForm = styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    gap: 1rem;
    width: 500px;
    padding: 3rem 2rem 2rem;
    background: ${GV("bg")};
    border-radius: 1rem;
    border: 0.5px solid #fff;
    gap: 1rem;

    @media (max-width: 768px) {
        width: 100%;
        border: 0.1px solid #fff;
    }
`;

export const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

export const InlineText = styled.div`
    white-space: nowrap;
`