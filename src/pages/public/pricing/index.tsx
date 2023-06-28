import { Flex, Heading, Span } from "components/basic";
import { GV } from "utils/style.util";
import { CardWrapper } from "./style";

import LogoImg1 from "assets/pricing-logo1.png";
import LogoImg2 from "assets/pricing-logo2.png";
import CustomHeading from "components/pages/heading";
import Price from "components/pages/price";
import Bill from "components/pages/bill";
import { Button } from "components/custom";

const questions1 = [
    'Up to 5 Projects',
    'Style Calculation',
    '8 hours Support',
    'Real Measurement',
    'Changing Colors/Filtering',
    'Design Recommendation',
    'Review Panel',
    'VR/AR'
]

const questions2 = [
    'Up to 5 Projects',
    'Style Calculation',
    '8 hours Support',
    'Real Measurement',
    'Limited Changes & Filtering',
    'Limited Recommendations',
    'Review Panel',
    'Basic VR/AR',
    'E-Meeting a Designer'
];

const questions3 = [
    'Up to 5 Projects',
    'Style Calculation',
    '8 hours Support',
    'Real Measurement',
    'Changing Colors/Filtering',
    'Design Recommendation',
    'Review Panel',
    'VR/AR & Modification',
    'E-Meeting with a Designer'
];

const PricingPage = () => {
    return (
        <Flex $style={{
            fDirection: 'column',
            hAlign: 'center'
        }}>
            <Flex $style={{
                fDirection: 'column',
                hAlign: 'center',
                vAlign: 'center',
                gap: '0.5rem',
                mb: "2rem"
            }}>
                <Span $style={{
                    color: GV('primary-opacity')
                }}>PREMIUM PRICING PLANS</Span>
                <Heading level={3}>Choose the plan that fits your needs!</Heading>
            </Flex>
            <Flex $style={{
                fDirection: 'row',
                hAlign: 'center',
                vAlign: 'flex-end',
                gap: '1rem',
                queries: {
                    768: {
                        fDirection: "column",
                        vAlign: "initial"
                    }
                }
            }}>
                <CardWrapper>
                    <Flex $style={{
                        fDirection: 'column',
                        gap: '0.5rem',
                        hAlign: 'flex-start',
                        vAlign: 'center'
                    }}>
                        <CustomHeading logo={LogoImg1} title="BASIC" description="Recommended subscription model" />
                        <Price price={'FREE'} />
                        <Bill items={questions1} />
                    </Flex>
                    <Flex $style={{
                        hAlign: "center"
                    }}>
                        <Button $style={{
                            bg: 'transparent',
                            border: GV('primary')
                        }}>Buy now</Button>
                    </Flex>
                </CardWrapper>
                <CardWrapper>
                    <CustomHeading logo={LogoImg2} title="STANDARD" description="Recommended subscription model" />
                    <Price price={19.99} />
                    <Bill items={questions2} />
                    <Flex $style={{
                        hAlign: "center"
                    }}>
                        <Button $style={{
                            bg: GV('primary')
                        }}>Buy now</Button>
                    </Flex>
                </CardWrapper>
                <CardWrapper>
                    <CustomHeading logo={LogoImg1} title="PREMIUM" description="Recommended subscription model" />
                    <Price price={199.99} />
                    <Bill items={questions3} />
                    <Flex $style={{
                        hAlign: "center"
                    }}>
                        <Button $style={{
                            bg: 'transparent',
                            border: GV('primary')
                        }}>Buy now</Button>
                    </Flex>
                </CardWrapper>
            </Flex>
        </Flex>
    )
}

export default PricingPage;