import { Flex, Heading, P, Span, Link } from "components/basic";
import { Button, Input } from "components/custom";
import { GV } from "utils/style.util";
import { ContactForm, HomeTitle, ImageWrapper, LogoWrapper } from "./style";

import Image1 from "assets/overview/1.png"
import Image2 from "assets/overview/2.png"

import LogoImg from "assets/logo.png";
import ReactCompareImage from "react-compare-image";
import React, { useState } from "react";

const OverviewPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <React.Fragment>
            <Flex $style={{
                flex: "1",
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
                                <P>
Get ready for an amazing adventure with Rendro! By snapping a picture of your room, this incredible app reveals your personal style and creates stunning pictures of your space that will leave you amazed.</P>
                                <Button $style={{
                                    bg: GV("primary")
                                }}>Get Started</Button>
                            </Flex>
                        </HomeTitle>
                    </Flex>
                    <ContactForm>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "0.5rem"
                        }}>
                            <P>Start your home interior design with Rendro.ca</P>
                            <Flex $style={{
                                fDirection: "column",
                                gap: "0.5rem"
                            }}>
                                <Span>Email:</Span>
                                <Input value={email} onChange={(e: any) => setEmail(e.target.value)} />
                            </Flex>
                            <Flex $style={{
                                fDirection: "column",
                                gap: "0.5rem"
                            }}>
                                <Span>Password:</Span>
                                <Input value={password} onChange={(e: any) => setPassword(e.target.value)} />
                            </Flex>
                        </Flex>
                        <Span $style={{
                            size: '0.8rem',
                            color: GV('primary')
                        }}>Forgot password ?</Span>
                        <Button $style={{
                            bg: GV("primary")
                        }}>Sign In</Button>
                        <Flex $style={{
                            hAlign: 'center'
                        }}>
                            <Span $style={{
                                size: '0.8rem',
                            }}>Don't have an account? <Link $style={{
                                color: GV('primary')
                            }} to={'/signup'}>Sign up</Link>
                            </Span>
                        </Flex>
                    </ContactForm>
                </Flex>
                <ImageWrapper>
                    <ReactCompareImage
                        leftImage={Image1}
                        rightImage={Image2}
                        leftImageCss={{ borderRadius: '5px 0 0 5px' }}
                        rightImageCss={{ borderRadius: '0 5px 5px 0' }}
                        aspectRatio='wider'
                    />
                </ImageWrapper>
            </Flex>
        </React.Fragment>
    )
}

export default OverviewPage;