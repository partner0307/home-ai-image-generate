import { Flex, Heading, P } from 'components/basic';
import { Button } from 'components/custom';
import React from 'react';
import { Link } from 'react-router-dom';
import { GV } from 'utils/style.util';

const Conditions = () => {
    return <>
        <Flex $style={{
            fDirection: 'row',
            hAlign: 'center',
            h: '100%'
        }}>
            <Flex $style={{
                fDirection: 'column',
                hAlign: 'space-between',
                vAlign: 'center',
                gap: '2rem',
                w: '50%'
            }}>
                <Flex $style={{
                    fDirection: 'column',
                    gap: '2rem'
                }}>
                    <Heading level={3}>Terms & Conditions</Heading>
                    <P>By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the app. you are not allowed to copy, modify the app, any part of the app, or our trademarks in any way. you are not allowed to attempt to extract the source code of the app, and you also should not try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it still belong to RENDRO company.</P>
                    <P>RENDRO is committed to ensuring that the app is as useful and efficient as possible. For that reason, we serve the right to make changes to the app or to charge for its services, at any time and for any reason. we will never charge you for the app or its services without making it clear to you exactly what you are paying for.</P>
                    <P>The app stores and processes personal data that you have provided to us, in order to provide our service. it is your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. it could make your phone vulnerable to malware/viruses/malicious programs, compromise you phone’s security features and it could mean that the app will not work properly at all.</P>
                </Flex>
                <Link to='/'>
                    <Button $style={{
                        bg: GV('primary')
                    }}>OK</Button>
                </Link>
            </Flex>
        </Flex>
    </>
}

export default Conditions;