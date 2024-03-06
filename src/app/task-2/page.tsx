import React from 'react';
import Counter from '../../components/Counter';

const PageCounter = () => {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center space-y-5">
                <p className="text-slate-900 text-3xl font-bold">Counter App</p>
                <Counter />
            </section>
        </>
    );
};

export default PageCounter;
