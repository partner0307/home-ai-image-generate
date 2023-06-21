import { Flex, P } from 'components/basic';
import React from 'react';

type CheckboxItemPropsType = {
    description: string
}

const CheckboxItem: React.FC<CheckboxItemPropsType> = ({ description }) => {
    return <>
        <Flex $style={{
            fDirection: 'row',
            gap: '0.25rem',
            hAlign: 'flex-start'
        }}>
            <input type="checkbox" />
            <P>{description}</P>
        </Flex>
    </>
}

export default CheckboxItem;