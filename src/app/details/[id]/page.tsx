import Link from "next/link";
import * as api from "@/lib/api";

type ParamsProps = {
  params: {
    id: number;
  };
};

const Details = async ({ params }: ParamsProps) => {
  const { id } = await params;
  const data = await api.getPokemonById(id);

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h1
        className="border-b-4 border-black dark:border-white 
                   p-2 text-3xl font-bold capitalize 
                   text-gray-800 dark:text-gray-100 transition-colors duration-300"
      >
        {data.name}
      </h1>
      <img
        className="w-48 h-48 mt-6 drop-shadow-lg transition-transform duration-300 hover:scale-105"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={data.name}
      />
      <div
        className="flex flex-col mt-8 w-full max-w-md 
                   border-2 border-black dark:border-white 
                   rounded-xl shadow-md overflow-hidden 
                   bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
      >
        <h2
          className="border-b-2 border-black dark:border-white 
                     text-2xl font-semibold text-center 
                     bg-gray-300 dark:bg-gray-700 
                     text-gray-900 dark:text-gray-100 p-2"
        >
          Descrições
        </h2>

        <div className="flex flex-col p-4 space-y-4">
          <div>
            <h3 className="text-center font-medium text-gray-800 dark:text-gray-200 mb-2">
              Tipo
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {data.types.map((t) => (
                <li key={t.type.name}>{t.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-center font-medium text-gray-800 dark:text-gray-200 mb-2">
              Peso
            </h3>
            <p className="text-left text-gray-700 dark:text-gray-300">
              {data.weight} kg
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 text-sm font-medium 
                   text-white bg-blue-600 rounded-lg 
                   hover:bg-blue-700 transition-colors duration-300 
                   dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        ← Voltar
      </Link>
    </div>
  );
};

export default Details;
