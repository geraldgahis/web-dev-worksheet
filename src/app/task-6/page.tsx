import CardList from '@/components/CardList';
import React from 'react';

export default async function CardPage() {
    return (
        <>
            <section className="h-full max-w-7xl mx-auto my-24">
                <CardList />
            </section>
        </>
    );
}
