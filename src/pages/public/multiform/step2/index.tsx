import { Button } from "components/custom";
import React from "react";

type Step2PagePropsType = {
    next: any
}

const Step2Page: React.FC<Step2PagePropsType> = ({
    next
}) => {
    return (
        <div>
            <span>Stap 1</span>
            <Button onClick={next}>Next</Button>
        </div>
    )
}

export default Step2Page;
