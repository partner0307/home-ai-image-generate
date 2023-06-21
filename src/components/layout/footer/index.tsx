import { Flex, P } from "components/basic";
import { FooterContainer } from "./style"
import { Icon } from "components/custom";


const Footer = () => {
    return (
        <FooterContainer>
            <P>Copyright 2023 rendro. All Rights Reserved</P>
            <Flex $style={{
                fDirection: 'column',
                gap: "0.25rem"
            }}>
                <P>Rendro@info.com</P>
                <Flex $style={{
                    fDirection: 'row',
                    gap: '0.75rem'
                }}>
                    <Icon icon="Youtube" />
                    <Icon icon="Discord" />
                    <Icon icon="Instagram" />
                    <Icon icon="Linkedin" />
                    <Icon icon="Twitter" />
                </Flex>
            </Flex>
        </FooterContainer>
    )
}

export default Footer;
