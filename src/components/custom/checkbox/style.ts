import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export type StylePropsType = {
    w?: string
    h?: string
    initBg?: string
    selectedBg?: string
    initBorder?: string
    selectedBorder?: string
    initColor?: string
    selectedColor?: string
    radius?: string
}

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const StyledCheckbox = styled.div<{$style?: StylePropsType, $isChecked: boolean}>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${({ $style }) => $style?.w ?? `25px`};
    height: ${({ $style }) => $style?.h ?? `25px`};
    background: ${({ $style }) => $style?.initBg ?? `white`};
    border: 1px solid ${({ $style }) => $style?.initBorder ?? 'white'};
    ${({ $style, $isChecked }) => $isChecked ? `background: ${$style?.selectedBg ?? `white`};` : ``}
    ${({ $style, $isChecked }) => $isChecked ? `border: 1px solid ${$style?.selectedBorder ?? "white"};` : ``}
    border-radius: ${({ $style }) => $style?.radius ?? `8px`};
    cursor: pointer;
`
