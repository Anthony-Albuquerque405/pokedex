import Link from "next/link";
import * as api from "@/lib/api";

const Pokemon = async () => {
  const data = await api.getAllPokemon();

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10 mb-16 px-6">
      {data.results.map((pokemon) => {
        const id = pokemon.url.split("/")[6];

        return (
          <div
            key={pokemon.name}
            className="flex flex-col items-center p-6 w-72 h-80 
                       bg-linear-to-b from-gray-100 to-gray-200 
                       dark:from-gray-800 dark:to-gray-900 
                       border border-gray-300 dark:border-gray-700 
                       rounded-2xl shadow-lg 
                       hover:shadow-xl hover:scale-105 hover:-translate-y-1 
                       transition-all duration-500"
          >
            {/* ID */}
            <p className="w-full text-sm text-gray-600 mb-2 dark:text-gray-400">
              #ID: {id}
            </p>

            {/* Imagem */}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={pokemon.name}
              className="w-32 h-32 object-contain mb-4 
                         transform transition-transform duration-500 
                         hover:scale-110 hover:rotate-1 drop-shadow-md"
            />

            {/* Nome */}
            <h2
              className="text-xl font-extrabold capitalize text-center 
                         bg-linear-to-r from-blue-600 to-purple-600 
                         dark:from-blue-400 dark:to-purple-400 
                         bg-clip-text text-transparent drop-shadow-sm"
            >
              {pokemon.name}
            </h2>

            {/* Botão */}
            <div className="mt-auto">
              <Link
                href={`/details/${id}`}
                className="inline-block mt-4 px-5 py-2 text-sm font-semibold 
                           text-white rounded-xl 
                           bg-linear-to-r from-blue-600 to-purple-600 
                           dark:from-blue-500 dark:to-purple-500 
                           shadow-md hover:shadow-lg hover:scale-105 
                           transition-all duration-500"
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
