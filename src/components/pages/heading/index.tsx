import { Flex, Heading, Span } from 'components/basic';
import React from 'react';
import { LogoWrapper } from './style';

type CustomHeadingPropsType = {
    logo?: any,
    title?: string,
    description?: string
}

const CustomHeading: React.FC<CustomHeadingPropsType> = ({ logo, title, description }) => {
    return <>
        <Flex $style={{
            fDirection: 'row',
            hAlign: 'center',
            gap: '0.5rem'
        }}>
            <LogoWrapper>
                <img src={logo} height={'100%'} alt="" />
            </LogoWrapper>
            <Flex $style={{
                fDirection: 'column',
                hAlign: 'flex-start',
                gap: '0.125rem',
            }}>
                <Heading level={4}>{title}</Heading>
                <Span $style={{
                    size: '0.8rem'
                }}>{description}</Span>
            </Flex>
        </Flex>
    </>
}

export default CustomHeading;