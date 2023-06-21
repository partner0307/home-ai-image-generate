import { Flex, P } from 'components/basic';
import { Icon } from 'components/custom';
import React from 'react';
import { ItemWrapper } from './style';

type ItemPropsType = {
    text: string
}

type BillPropsType = {
    items: string[]
}

const Item: React.FC<ItemPropsType> = ({ text }) => {
    return <>
        <Flex $style={{
            fDirection: 'row',
            hAlign: 'flex-start',
            gap: '1rem'
        }}>
            <Icon icon='CircleCheckFilled' />
            <P>{text}</P>
        </Flex>
    </>
}

const Bill: React.FC<BillPropsType> = ({ items }) => {
    return <ItemWrapper>
        <Flex $style={{
            fDirection: 'column',
            hAlign: 'center',
            gap: '1rem'
        }}>
            {items.map(p => <Item text={p} />)}
        </Flex>
    </ItemWrapper>
}

export default Bill;