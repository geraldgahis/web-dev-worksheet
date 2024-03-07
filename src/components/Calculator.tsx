'use client';
import React, { useState } from 'react';

interface ICalculator {
    firstNumber: number;
    secondNumber: number;
}

const initialCalculatorState: ICalculator = {
    firstNumber: 0,
    secondNumber: 0,
};

const Calculator = () => {
    const [input, setInput] = useState<ICalculator>(initialCalculatorState);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue)) return;

        setInput({
            ...input,
            [name]: parsedValue,
        });
    };

    const handleReset = () => {
        setInput(initialCalculatorState);
    };

    const sum = input.firstNumber + input.secondNumber;

    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <div className="space-y-6">
                <h5 className="text-xl font-medium text-gray-900 text-center">
                    Sum: {sum}
                </h5>
                <div>
                    <label
                        htmlFor="firstNumber"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        First Number
                    </label>
                    <input
                        type="number"
                        name="firstNumber"
                        id="firstNumber"
                        value={input.firstNumber || 0}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="secondNumber"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Second Number
                    </label>
                    <input
                        type="number"
                        name="secondNumber"
                        value={input.secondNumber || 0}
                        onChange={handleChange}
                        id="secondNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    />
                </div>
                <button
                    onClick={handleReset}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Calculator;
