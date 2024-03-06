'use client';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const resetCounter = () => setCount(0);

    const is_even = count % 2 === 0;
    return (
        <div>
            <div className="w-full max-w-md  p-8 rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="flex flex-col items-center">
                    <h5 className="mb-1 text-9xl font-medium text-white">
                        {count}
                    </h5>
                    <span
                        className={`bg-gray-700 text-xs font-medium px-2.5 py-0.5 rounded border ${
                            is_even
                                ? 'text-green-400 border-green-400'
                                : ' text-yellow-300 border-yellow-300'
                        }`}
                    >
                        {is_even ? 'Even' : 'Odd'}
                    </span>
                    <div className="flex mt-4 md:mt-6 space-x-2">
                        <button
                            onClick={increment}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 "
                        >
                            Increment
                        </button>
                        <button
                            onClick={decrement}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg focus:ring focus:outline-none focus:ring-red-300"
                        >
                            Decrement
                        </button>
                    </div>
                    <div className="w-full mt-2 text-center">
                        <button
                            onClick={resetCounter}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg py-2 px-4 text-sm font-medium w-full"
                        >
                            Reset Counter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
