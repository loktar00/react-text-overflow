import React, { CSSProperties } from 'react';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    style?: CSSProperties
}

const TruncateElement = ({ children, style = {} }: Props) => (
    <span
        style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'block',
            ...style
        }}
    >
        {children}
    </span>

);

export default TruncateElement;
