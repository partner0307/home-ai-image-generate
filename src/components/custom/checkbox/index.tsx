import React from "react";
import { CheckboxContainer, StylePropsType, StyledCheckbox } from "./style";
import Icon from "../icon";

type CheckboxPropsType = {
    label?: string | React.ReactNode
    isChecked?: boolean
    onChange?: any
    $style?: StylePropsType
}

const Checkbox: React.FC<CheckboxPropsType> = ({
    label,
    isChecked,
    onChange,
    $style
}) => {
    return (
        <CheckboxContainer onClick={onChange}>
            <StyledCheckbox $style={$style} $isChecked={isChecked ?? false}>
                {isChecked && <Icon icon="Check" />}
            </StyledCheckbox>
            {label && label}
        </CheckboxContainer>
    )
}

export default Checkbox;
