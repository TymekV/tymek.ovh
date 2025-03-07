'use client';
import { css } from '@/styled-system/css';
import { useEffect, useState } from 'react';

export type BarProps = {
    value: number;
}

export default function Bar({ value }: BarProps) {
    const [currentWidth, setCurrentWidth] = useState('0px');

    useEffect(() => {
        setCurrentWidth(`${value}%`);
    }, [value]);

    return (
        <div className={container}>
            <div className={bar} style={{
                // background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${token(color)} 100%)`,
                // background: token(color),
                width: currentWidth,
            }}></div>
        </div>
    )

}

const bar = css({
    height: '5px',
    borderRadius: '5px',
    transition: 'width 1s ease',
    // backgroundColor: 'text.3',
    background: `linear-gradient(90deg, #ffffff10 0%, #ffffff30 100%)`
});

const container = css({
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
});