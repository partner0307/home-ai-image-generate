import { Button } from "components/custom";
import React from "react";

type Step1PagePropsType = {
    next: any
}

const Step1Page: React.FC<Step1PagePropsType> = ({
    next
}) => {
    return (
        <div>
            <span>Stap 1</span>
            <Button onClick={next}>Next</Button>
        </div>
    )
}

export default Step1Page;
