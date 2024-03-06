'use client';
import React, { useState } from 'react';

const TextGrow = () => {
    const [size, setSize] = useState(14);
    const [color, setColor] = useState('#eeeeee');

    const handleClick = () => {
        setSize(size + 8);
        setColor(
            () =>
                '#' +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, '0')
        );
    };
    return (
        <button
            className={`text-center text-sm text-black font-bold rounded-md flex justify-center items-center`}
            style={{ backgroundColor: color, padding: size, fontSize: size }}
            onClick={handleClick}
        >
            GROW
        </button>
    );
};

export default TextGrow;
