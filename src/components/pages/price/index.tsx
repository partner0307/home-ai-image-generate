import { Flex, Heading, P } from 'components/basic';
import React from 'react';
import { GV } from 'utils/style.util';

type PricePropsType = {
    price?: number
}

const Price: React.FC<PricePropsType> = ({ price }) => {
    return <>
        <Flex $style={{
            fDirection: 'column',
            hAlign: 'flex-start',
            gap: '1rem'
        }}>
            <Flex $style={{
                fDirection: 'row',
                vAlign: 'center',
                gap: '0.5rem'
            }}>
                <Heading level={2}>${price}</Heading>
                <P>/month</P>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                hAlign: 'center',
                gap: '0.25rem'
            }}>
                <P $style={{
                    color: GV('secondary')
                }}>Cancel anytime</P>
                <P>Get 3 months free with annual billing</P>
            </Flex>
        </Flex>
    </>
}

export default Price;