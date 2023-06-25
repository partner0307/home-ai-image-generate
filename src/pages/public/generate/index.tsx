import React from "react";
import ReactCompareImage from "react-compare-image";

import Image1 from "assets/1.png"
import Image2 from "assets/2.png"
import { ImageWrapper } from "./style";
import { Flex } from "components/basic";
import { Button } from "components/custom";
import { GV } from "utils/style.util";

type GeneratePagePropsType = {
    prev: any;
}

const GeneratePage: React.FC<GeneratePagePropsType> = ({ prev }) => {
    return (
        <Flex $style={{
            fDirection: "column",
            h: "100%",
            w: "100%"
        }}>
            <Flex $style={{
                flex: '1',
                fDirection: 'column',
                gap: '3rem'
            }}>
                <ImageWrapper>
                    <ReactCompareImage
                        leftImage={Image1}
                        rightImage={Image2}
                        leftImageCss={{ borderRadius: '5px 0 0 5px' }}
                        rightImageCss={{ borderRadius: '0 5px 5px 0' }}
                        aspectRatio='wider'
                    />
                </ImageWrapper>
                <Flex $style={{
                    fDirection: 'row',
                    gap: '2rem',
                    hAlign: 'space-between',
                    vAlign: 'center'
                }}>
                    <Button $style={{
                        bg: GV('dark')
                    }} onClick={prev}>Try Again</Button>
                    <Button $style={{
                        bg: GV('primary')
                    }}>Share</Button>
                    <Button $style={{
                        bg: 'transparent',
                        border: GV('primary')
                    }}>Preview</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default GeneratePage;