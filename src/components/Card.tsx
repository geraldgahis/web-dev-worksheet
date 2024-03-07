import Link from 'next/link';
import React from 'react';
const getPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
    const data = await res.json();

    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: any) => {
            const getDetails = await fetch(pokemon.url);

            const details = await getDetails.json();
            const speciesRes = await fetch(details.species.url);
            const speciesData = await speciesRes.json();
            const enFlavorText = speciesData.flavor_text_entries.find(
                (entry: any) => entry.language.name === 'en'
            );

            return {
                ...details,
                url: pokemon.url,
                flavorText: enFlavorText ? enFlavorText.flavor_text : '',
            };
        })
    );
    return pokemonDetails;
};

export default async function Card() {
    const data = await getPokemonList();
    console.log(data);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                {data.map((item: any) => (
                    <div key={item.id}>
                        <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-80 w-72 rounded-2xl hover:duration-700 duration-700 outline outline-slate-800">
                            <div
                                className="bg-slate-200 w-72 h-72  rounded-t-2xl bg-cover bg-center "
                                style={{
                                    backgroundImage: `url(${item.sprites.other['official-artwork'].front_default})`,
                                }}
                            ></div>
                            <div className="pt-3 absolute bg-gray-50 -bottom-[4.5rem] w-72 p-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                                <span className="text-gray-800 font-bold text-xs uppercase">
                                    {item.name}
                                </span>

                                <p className="text-neutral-800 text-sm">
                                    {item.flavorText}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
{
    /* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto">
                @foreach ($popularMovies as $popularMovie)
                    <a href="">
                        <div className="relative w-full h-80 rounded-lg bg-cover bg-center "
                            style="background-image: url('http://image.tmdb.org/t/p/w500/{{ $popularMovie['poster_path'] }}')">
                            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black to-transparent">
                            </div>
                            <div className="p-2 absolute bottom-0">
                                <h1 className="text-md font-bold text-amber-400">{{ $popularMovie['title'] }}</h1>
                                <p className="text-xs text-gray-200">
                                    @foreach ($popularMovie['genre_ids'] as $genre)
                                        {{ $genres->get($genre) }}@if (!$loop->last)
                                            ,
                                        @endif
                                    @endforeach
                                </p>
                            </div>
                        </div>
                    </a>
                @endforeach
            </div> */
}
