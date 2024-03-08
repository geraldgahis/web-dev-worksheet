import Card from './Card';

const getPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60', {
        cache: 'no-cache',
    });
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
                description: enFlavorText ? enFlavorText.flavor_text : '',
            };
        })
    );
    return pokemonDetails;
};

export default async function CardList() {
    const data = await getPokemonList();
    return (
        <>
            <h1 className="text-4xl text-center font-bold mb-8">
                Pokemon List
            </h1>
            <div className="flex flex-wrap justify-center items-center ">
                {data.map((item: any) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        avatar={
                            item.sprites.other['official-artwork'].front_default
                        }
                        description={item.description}
                    />
                ))}
            </div>
        </>
    );
}
