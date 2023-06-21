import React from "react";
import { Line, MultiFormContainer, Thumb } from "./style";
import { Flex, Span } from "components/basic";

export type MultiFormItemType = {
    label: string
    caption: string
}

type MultiFormPropsType = {
    onChange: any
    items: MultiFormItemType[]
    activeIndex: number | null
}

const MultiForm: React.FC<MultiFormPropsType> = ({
    onChange,
    items,
    activeIndex
}) => {
    return (
        <MultiFormContainer>
            {items.map(({ caption, label }, key: number) => (
                <React.Fragment key={key}>
                    {key !== 0 && (
                        <Line len={items.length} isActive={(activeIndex === null) ? (activeIndex === null) : (activeIndex >= key)} />
                    ) }
                    <Flex $style={{
                        fDirection: "column",
                        vAlign: "center",
                        gap: "0.5rem"
                    }}>
                        <Thumb onClick={onChange} isActive={(activeIndex === null) ? (activeIndex === null) : (activeIndex >= key)}>{label}</Thumb>
                        <Span>{caption}</Span>
                    </Flex>
                </React.Fragment>
            ))}
        </MultiFormContainer>
    )
}

export default MultiForm;
