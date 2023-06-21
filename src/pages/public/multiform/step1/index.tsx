import { Flex, Grid, P, Span } from "components/basic";
import { Button, Checkbox, Image, Textarea } from "components/custom";
import React, { useState } from "react";
import { Uploader } from 'uploader';
import { UploadDropzone } from 'react-uploader';

import Image1 from 'assets/1.png';
import { CheckboxContainer, Tile, ImageBoxWrapper, InlineText } from "./style";
import { GV } from "utils/style.util";
import Dropdown from "components/custom/dropdown";

const uploader = Uploader({ apiKey: 'public_12a1yMA3Y7LAQka2wJSTDyFgytZF' });
const uploaderOptions = {
    showFinishButton: false,
    styles: {
        fontSizes: {
            base: 14
        },
        colors: {
            primary: '#66d7eb'
        }
    }
}

type Step1PagePropsType = {
    next1: any,
    next2: any
}

const questions = [
    '1. Which couch would you prefer to snuggle up on ?',
    '2. Which couch would you prefer to snuggle up on ?',
    '3. Which couch would you prefer to snuggle up on ?',
    '4. Which couch would you prefer to snuggle up on ?',
    '5. Which couch would you prefer to snuggle up on ?',
    '6. Which couch would you prefer to snuggle up on ?',
    '7. Which couch would you prefer to snuggle up on ?',
    '8. Which couch would you prefer to snuggle up on ?',
    '9. Which couch would you prefer to snuggle up on ?',
    '10. Which couch would you prefer to snuggle up on ?',
];

const ImageArray = [
    {
        index: '1',
        image: Image1,
    },
    {
        index: '2',
        image: Image1,
    },
    {
        index: '3',
        image: Image1,
    },
    {
        index: '4',
        image: Image1,
    },
    {
        index: '5',
        image: Image1,
    },
    {
        index: '6',
        image: Image1,
    },
    {
        index: '7',
        image: Image1,
    },
    {
        index: '8',
        image: Image1,
    },
    {
        index: '9',
        image: Image1,
    }
];

const Step1Page: React.FC<Step1PagePropsType> = ({
    next1,
    next2
}) => {
    const [quizIndex, setQuizIndex] = useState(0);
    const [checkList, setCheckList] = useState<boolean[]>(Array(ImageArray.length).fill(false));
    const [isPublished, setIsPublished] = useState(false);
    const [isRecommend, setIsRecommend] = useState(false);
    const [isConsidered, setIsConsidered] = useState(false);
    const [walls, setWalls] = useState(false);
    const [furniture, setFurniture] = useState(false);
    const [lighting, setLighting] = useState(false);

    const handleNext = () => {
        setQuizIndex(quizIndex + 1);

        if(quizIndex + 1 >= 9)
            next1();
    }

    const checkImage = (index: number) => {
        let temp = [...checkList];
        temp[index] = !temp[index];
        setCheckList((prev) => temp);
    }

    return (
        <Flex $style={{
            flex: "1",
            fDirection: 'row',
            gap: '2rem',
            hAlign: 'center',
            vAlign: 'flex-start',
            overflow: "hidden",
            w: "100%"
        }}>
            <Flex $style={{
                flex: "1",
                fDirection: 'column',
                gap: '1rem',
                hAlign: 'flex-start',
                vAlign: 'center',
                w: '50%',
                h: "100%",
                overflow: "hidden",
                minW: "300px"
            }}>
                <P>{questions[quizIndex]}</P>
                <Flex $style={{
                    flex: "1",
                    fDirection: 'column',
                    hAlign: "space-between",
                    gap: '2rem',
                    overflow: "hidden",
                    w: "100%"
                }}>
                    <ImageBoxWrapper>
                        <Grid $style={{
                            columns: "3",
                            gap: "0.7rem",
                            queries: {
                                1440: {
                                    columns : "2"
                                },
                                1200: {
                                    columns: "1"
                                }
                            }
                        }}>
                            {ImageArray.map((item, key) => (
                                <Tile key={key}>
                                    <CheckboxContainer>
                                        <Checkbox isChecked={checkList[key]} label="" onChange={() => checkImage(key)} />
                                    </CheckboxContainer>
                                    <Image url={item.image} radius={'0.25rem'} />
                                </Tile>
                            ))}
                        </Grid>
                    </ImageBoxWrapper>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'space-between',
                        w: '100%'
                    }}>
                        <Button $style={{bg: GV('dark')}} disabled={quizIndex <= 0 ? true : false} onClick={() => setQuizIndex(quizIndex - 1)}>Back</Button>
                        <Button $style={{bg: quizIndex >= 9 ? GV('dark') : GV('primary')}} disabled={quizIndex >= 9 ? true : false} onClick={handleNext}>Next</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex $style={{
                flex: "1",
                fDirection: 'column',
                hAlign: "space-between",
                h: "100%",
                gap: '1rem'
            }}>
                <P>You almost done. Upload the image and make your own home.</P>
                <Flex $style={{
                    fDirection: 'column',
                    gap: '0.5rem'
                }}>
                    <UploadDropzone
                        uploader={uploader}
                        options={uploaderOptions}
                        onUpdate={files => console.log(files.map(x => x.fileUrl).join("\n"))}
                        onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                        width="100%"
                        height="255px"
                    />
                    <Flex $style={{
                        fDirection: 'row',
                        gap: '0.25rem'
                    }}>
                        <Dropdown
                            container={() => (
                                <Flex as={"ul"} $style={{
                                    fDirection: "column"
                                }}>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 1</Span>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 2</Span>
                                </Flex>
                            )}
                            initialLabel="Choose your room type"
                        />
                        <Dropdown
                            container={() => (
                                <Flex as={"ul"} $style={{
                                    fDirection: "column"
                                }}>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 1</Span>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 2</Span>
                                </Flex>
                            )}
                            initialLabel="Choose your interior style"
                        />
                    </Flex>
                    <Textarea value="" label='' placeholder="Type your prompt here..." />
                    <Flex $style={{
                        h: "30px"
                    }}>
                        <Checkbox
                            label={(<InlineText>Design can be published publicly (Pro)</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={isPublished}
                            onChange={() => setIsPublished(!isPublished)}
                        />
                    </Flex>
                    <Flex $style={{
                        h: "30px"
                    }}>
                        <Checkbox 
                            label={(<InlineText>Design recommendation (Pro)</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={isRecommend}
                            onChange={() => setIsRecommend(!isRecommend)}
                        />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'center',
                        vAlign: 'center',
                        gap: '0.5rem',
                        h: "30px"
                    }}>
                        <Checkbox 
                            label={(<InlineText>How much you consider to spend on renovation ?</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={isConsidered}
                            onChange={() => setIsConsidered(!isConsidered)}
                        />
                        <Dropdown
                            container={() => (
                                <Flex as={"ul"} $style={{
                                    fDirection: "column"
                                }}>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 1</Span>
                                    <Span as={"li"} $style={{
                                        color: GV("bg")
                                    }}>Item 2</Span>
                                </Flex>
                            )}
                            initialLabel="500"
                            isTop
                            rightSide={"CAD"}
                            isSm
                        />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                        vAlign: 'center',
                        gap: '1.5rem'
                    }}>
                        <P>What we can change?</P>
                        <Checkbox 
                            label={(<InlineText>Walls</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={walls}
                            onChange={() => setWalls(!walls)}
                        />
                        <Checkbox 
                            label={(<InlineText>Furniture</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={furniture}
                            onChange={() => setFurniture(!furniture)}
                        />
                        <Checkbox 
                            label={(<InlineText>Lighting</InlineText>)}
                            $style={{
                                w: "16px",
                                h: "16px",
                                initBg: "transparent",
                                initBorder: GV("primary"),
                                radius: "4px"
                            }}
                            isChecked={lighting}
                            onChange={() => setLighting(!lighting)}
                        />
                    </Flex>
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Button $style={{
                        bg: quizIndex < 9 ? GV('primary-opacity') : GV('primary')
                    }} disabled={quizIndex < 9 ? true : false} onClick={() => {next2()}}>Generate Your Home</Button>
                </Flex>
            </Flex>
            {/* <Button onClick={next}>Next</Button> */}
        </Flex>
    )
}

export default Step1Page;
