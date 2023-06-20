import { Flex, Heading, P, Span } from "components/basic";
import { Button, Input } from "components/custom";
import React from "react";
import { GV } from "utils/style.util";
import { ContactForm, HomeTitle, ImageWrapper, LogoWrapper } from "./style";

import Image1 from "assets/1.png"
import Image2 from "assets/2.png"

import LogoImg from "assets/logo.png";
import ReactCompareImage from "react-compare-image";

const OverviewPage = () => {
    return (
        <Flex $style={{
            fDirection: "column",
            gap: "2rem",
            h: "100%"
        }}>
            <Flex $style={{
                gap: "2rem",
                hAlign: "space-between",
                queries: {
                    768: {
                        fDirection: "column"
                    }
                }
            }}>
                <Flex $style={{
                    fDirection: "column",
                    hAlign: "space-between",
                    gap: "2rem"
                }}>
                    <LogoWrapper>
                        <img src={LogoImg} height={'100%'} alt="" />
                    </LogoWrapper>
                    <HomeTitle>
                        <Flex $style={{
                            fDirection: "column",
                            vAlign: "flex-start",
                            gap: "2rem",
                            queries: {
                                768: {
                                    vAlign: 'center'
                                }
                            }
                        }}>
                            <Heading level={1}>Imagine Design Feel Good</Heading>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</P>
                            <Button $style={{
                                bg: GV("primary")
                            }}>Get Started</Button>
                        </Flex>
                    </HomeTitle>
                </Flex>
                <ContactForm>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "1.5rem"
                    }}>
                        <P>Start your home interior design with rendro.ai</P>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "0.5rem"
                        }}>
                            <Span>Email:</Span>
                            <Input value="" />
                        </Flex>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "0.5rem"
                        }}>
                            <Span>Password:</Span>
                            <Input value="" />
                        </Flex>
                    </Flex>
                    <Button $style={{
                        bg: GV("primary")
                    }}>Sign In</Button>
                </ContactForm>
            </Flex>
            <ImageWrapper>
                <ReactCompareImage
                    leftImage={Image1}
                    rightImage={Image2}
                    leftImageCss={{ width: '100%', height: '100%', borderRadius: '5px 0 0 5px', objectFit: 'cover' }}
                    rightImageCss={{ width: '100%', height: '100%', borderRadius: '0 5px 5px 0', objectFit: 'cover' }}
                    aspectRatio='wider'
                />
            </ImageWrapper>
        </Flex>
    )
}

export default OverviewPage;