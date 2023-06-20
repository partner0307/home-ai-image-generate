import { styled } from "styled-components";

export const MultiFormContainer = styled.div`
    display: flex;
    justify-content: space-between;

    >div {
        >span {
            text-align: center;
            white-space: nowrap;
        }
    }
`

export const Thumb = styled.div<{isActive?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${({ isActive }) => isActive ? `#66D7EB` : `#66D7EB33;`};
    border-radius: 50%;
    cursor: pointer;
`

export const Line = styled.span<{len: number}>`
    margin-top: 23.5px;
    display: inline-block;
    height: 3px;
    ${({ len }) => `width: calc((100% - ${50 * len}px) / ${len - 1});`}
    background: linear-gradient(270deg, #66D7EB 0%, rgba(102, 215, 235, 0) 100%);
`
