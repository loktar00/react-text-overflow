import React from 'react';

import TruncateElement from './TruncateElement';

type Props = {
    text: string,
    truncatePosition?: 'start' | 'middle' | 'end',
    startPos?: number
};

const TextOverflow = ({
    text,
    startPos = 0,
    truncatePosition = 'end'
}: Props) => {
    if (truncatePosition === 'middle') {
        let start = text.slice(0, ~~(text.length / 2));
        let end = text.slice(~~(text.length / 2));

        if (startPos) {
            start = text.slice(0, startPos);
            end = text.slice(startPos);
        }

        // Fix the ends of our string since we're using RTL
        end = `\u200e${end}\u200e`;
        start = `\u200e${start}\u200e`;

        return (
            <TruncateElement style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0px, max-content))' }} title={text}>
                <TruncateElement style={{ display: 'auto' }}>{start}</TruncateElement>
                <TruncateElement style={{
                    textOverflow: 'ellipsis',
                    direction: 'rtl',
                    textAlign: 'left',
                    display: 'auto'
                }}
                >
                    {end}
                </TruncateElement>
            </TruncateElement>
        );
    }

    if (truncatePosition === 'start') {
        const textContent = `${text}\u200e`;

        return (
            <span style={{ display: 'grid', gridTemplateColumns: 'minmax(0px, 1fr)' }}>
                <TruncateElement style={{
                    direction: 'rtl',
                    textAlign: 'left',
                    textOverflow: 'ellipsis',
                    display: 'auto'
                }}
                >
                    {textContent}
                </TruncateElement>
            </span>
        );
    }

    return (
        <span style={{ display: 'grid', gridTemplateColumns: 'minmax(0px, 1fr)' }}>
            <TruncateElement style={{ textOverflow: 'ellipsis' }}>
                {text}
            </TruncateElement>
        </span>
    );
};

export default TextOverflow;
