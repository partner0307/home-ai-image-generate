import React from "react";
import { Button, Image } from "components/custom";
import { Flex, Heading, P } from "components/basic";

import Image1 from 'assets/1.png';
import { GV } from "utils/style.util";
import { ImageRowContainer } from "./style";

type RootPropsType = {
    next: any
}

const RootPage: React.FC<RootPropsType> = ({
    next
}) => {
    return (
        <Flex $style={{
            fDirection: 'column',
            vAlign: 'center',
            gap: '2rem',
            h: "100%"
        }}>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "0.5rem"
            }}>
                <Heading level={2} $style={{
                    align: "center"
                }}>How we work</Heading>
                <P $style={{
                    align: "center"
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
            </Flex>
            <Flex $style={{
                flex: "1",
                fDirection: 'column',
                gap: '1rem',
                overflow: "hidden"
            }}>
                <ImageRowContainer>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <P>Original Image</P>
                        <div>
                            <Image url={Image1} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <P>After Image</P>
                        <div>
                            <Image url={Image1} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                </ImageRowContainer>
                <ImageRowContainer>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <P>Original Image</P>
                        <div>
                            <Image url={Image1} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <P>After Image</P>
                        <div>
                            <Image url={Image1} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                </ImageRowContainer>
            </Flex>
            <Button $style={{
                bg: GV('primary')
            }} onClick={next}>Get Started</Button>
        </Flex>
    )
}

export default RootPage;