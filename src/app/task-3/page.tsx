import React from 'react';
import Calculator from '../../components/Calculator';

const PageCalculator = () => {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center space-y-5 px-4">
                <p className="text-slate-900 text-3xl font-bold">
                    Calculator App
                </p>
                <Calculator />
            </section>
        </>
    );
};

export default PageCalculator;
