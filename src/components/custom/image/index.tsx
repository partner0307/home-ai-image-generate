import React from 'react';

type ImagePropsType = {
    url: string,
    width?: string | number,
    height?: string | number,
    radius?: string | number,
    onClick?: any
}

const Image: React.FC<ImagePropsType> = ({
    url, width, height, radius, onClick
}) => {
    return <img src={url} style={{
        width,
        height,
        borderRadius: radius,
    }} onClick={onClick} alt="" />
}

export default Image;