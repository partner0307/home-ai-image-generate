import React from "react";
import { Button } from "components/custom";
import { Flex, Heading, P } from "components/basic";

type RootPropsType = {
    next: any
}

const RootPage: React.FC<RootPropsType> = ({
    next
}) => {
    return (
        <div>
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
            <Button onClick={next}>Start</Button>
        </div>
    )
}

export default RootPage;