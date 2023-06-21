import React, { useState } from "react";
import MultiForm from "components/pages/multiform";
import Step1Page from "./step1";
import RootPage from "./root";
import GeneratePage from "../generate";
import { Flex } from "components/basic";
import { Container } from "./style";
// import { Flex, Heading, P } from "components/basic";

const MultiFormPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <Flex $style={{
            flex: "1",
            h: "100%",
            fDirection: "column"
        }}>
            {/* {activeIndex === null ? (
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "0.5rem",
                    mb: "2rem"
                }}>
                    <Heading level={2} $style={{
                        align: "center"
                    }}>How we work</Heading>
                    <P $style={{
                        align: "center"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
                </Flex>
            ) : (
                <Flex $style={{
                    h: "3rem"
                }}></Flex>
            )} */}
            <MultiForm
                activeIndex={activeIndex}
                items={[{
                    caption: "Calculate style",
                    label: "1"
                },{
                    caption: "Upload image",
                    label: "2"
                },{
                    caption: "Generate design",
                    label: "3"
                }]}
                onChange={() => {}}
            />
            <Container>
                {activeIndex === null && (
                    <RootPage next={() => setActiveIndex(0)} />
                )}
                {(activeIndex === 0 || activeIndex === 1) && (
                    <Step1Page next1={() => setActiveIndex(1)} next2={() => setActiveIndex(2)} />
                )}
                {/* {activeIndex === 1 && (
                    <Step1Page next={() => setActiveIndex(2)} />
                )} */}
                {activeIndex === 2 && (
                    <GeneratePage />
                )}
            </Container>
        </Flex>
    )
}

export default MultiFormPage;
