const getPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
    const data = await res.json();

    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: any) => {
            const getDetails = await fetch(pokemon.url);
            return await getDetails.json();
        })
    );
    return pokemonDetails;
};

export default async function Pokemon() {
    const data = await getPokemonList();
    return (
        <>
            {data.map((item: any, index: number) => (
                <li key={index}>
                    {item.id} {item.name}
                </li>
            ))}
        </>
    );
}
