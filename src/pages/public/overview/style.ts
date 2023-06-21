import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const HomeTitle = styled.div`
    width: 80%;
`

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
`

export const LogoWrapper = styled.div`
    height: 100px;

    @media (max-width: 768px) {
        display: none;
        height: 40px;
    }
`

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        flex: initial;
    }
`