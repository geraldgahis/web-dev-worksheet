import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center">
                <p>Center element using flex.</p>
                <h1 className="bg-gradient-to-r from-cyan-600 via-purple-500 to-red-400 bg-clip-text text-transparent text-9xl font-bold">
                    Hello World
                </h1>
            </section>

            <section className="bg-slate-400 h-screen grid place-items-center">
                <div className="text-center">
                    <p>Center element using grid.</p>
                    <h1 className="bg-gradient-to-r from-cyan-600 via-purple-500 to-red-400 bg-clip-text text-transparent text-9xl font-bold">
                        Hello World
                    </h1>
                </div>
            </section>
            <section className="bg-white h-screen relative">
                <div className="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p>Center element using position.</p>
                    <h1 className="bg-gradient-to-r from-cyan-600 via-purple-500 to-red-400 bg-clip-text text-transparent text-9xl font-bold">
                        Hello World
                    </h1>
                </div>
            </section>
        </>
    );
}
