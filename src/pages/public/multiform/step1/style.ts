import styled from 'styled-components';
import { GV } from 'utils/style.util';

export const Tile = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 120%;

    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const InlineText = styled.div`
    white-space: nowrap;
`

export const CheckboxContainer = styled.div`
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    z-index: 1;
`

export const ImageBoxWrapper = styled.div`
    padding: 0 0.5rem 0 0;
    overflow: auto;
`

export const Select = styled.select`
    height: 2.25rem;
    width: 100%;
    border-radius: 0.325rem;
    border: 0.1rem solid ${GV('primary')};
    color: #ffffff;
    background: transparent;
    font-size: 0.75rem;
    padding: 0 0.25rem;
    font-family: 'Roboto';
    outline: none;
`;

export const Option = styled.option`
    color: #ffffff;
    background: ${GV('dark')};
    border-radius: 0.1rem;
    border: 0.1rem solid ${GV('primary')};
    outline: none;
`;