import React from "react";
import ReactCompareImage from "react-compare-image";

import Image1 from "assets/1.png"
import Image2 from "assets/2.png"
import { ImageWrapper } from "./style";
import { Flex } from "components/basic";
import { Button } from "components/custom";
import { GV } from "utils/style.util";

const GeneratePage = () => {
    return (
        <Flex $style={{
            fDirection: "column",
            h: "100%",
            w: "100%"
        }}>
            <Flex $style={{
                fDirection: 'column',
                gap: '3rem'
            }}>
                <ImageWrapper>
                    <ReactCompareImage
                        leftImage={Image1}
                        rightImage={Image2}
                        leftImageCss={{ width: '100%', height: '100%', borderRadius: '5px 0 0 5px', objectFit: 'cover' }}
                        rightImageCss={{ width: '100%', height: '100%', borderRadius: '0 5px 5px 0', objectFit: 'cover' }}
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
                    }}>Try Again</Button>
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