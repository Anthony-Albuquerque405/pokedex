import Link from "next/link";
import * as api from "@/lib/api";

const Pokemon = async () => {
  const data = await api.getAllPokemon();

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
      {data.results.map((pokemon) => {
        const id = pokemon.url.split("/")[6];

        return (
          <div
            key={pokemon.name}
            className="flex flex-col items-center p-6 w-72 h-80 
                       bg-white border border-gray-200 rounded-xl shadow-md 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300 
                       dark:bg-gray-800 dark:border-gray-700"
          >
            <p className="w-full text-sm text-gray-500 mb-2 dark:text-gray-400">
              #ID: {id}
            </p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={pokemon.name}
              className="w-32 h-32 object-contain mb-4 transform transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-xl font-bold capitalize text-gray-800 text-center dark:text-gray-100">
              {pokemon.name}
            </h2>
            <div className="mt-auto">
              <Link
                href={`/details/${id}`}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium 
                           text-white bg-blue-600 rounded-lg 
                           hover:bg-blue-700 transition-colors duration-300 
                           dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Detalhes
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
