import React from "react";
import { Button, Image } from "components/custom";
import { Flex, Heading, P, Span } from "components/basic";

import Image1 from 'assets/compare/1.png';
import Image2 from 'assets/compare/2.png';
import Image3 from 'assets/compare/3.png';
import Image4 from 'assets/compare/4.png';
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
                gap: "0.5rem",
                w: '40rem'
            }}>
                <Heading level={3} $style={{
                    align: "center"
                }}>How it works</Heading>
                <P $style={{
                    align: "center"
                }}>Unlock Your Dream Design: Personalize Your Space with Ease! Answer some simple questions, Upload a picture of your space, and Experience the Power of Design Transformation.</P>
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
                        <Span $style={{
                            size: '0.75rem'
                        }}>Original Image</Span>
                        <div>
                            <Image url={Image1} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <Span $style={{
                            size: '0.75rem'
                        }}>After Image</Span>
                        <div>
                            <Image url={Image2} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                </ImageRowContainer>
                <ImageRowContainer>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <Span $style={{
                            size: '0.75rem'
                        }}>Original Image</Span>
                        <div>
                            <Image url={Image3} radius={'1rem'} width={"20rem"} />
                        </div>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <Span $style={{
                            size: '0.75rem'
                        }}>After Image</Span>
                        <div>
                            <Image url={Image4} radius={'1rem'} width={"20rem"} />
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