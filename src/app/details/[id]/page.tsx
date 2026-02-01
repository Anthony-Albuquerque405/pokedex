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
        className="p-2 text-4xl font-extrabold capitalize 
                   bg-linear-to-r from-blue-600 to-purple-600 
                   dark:from-blue-400 dark:to-purple-400 
                   bg-clip-text text-transparent 
                   drop-shadow-md transition-all duration-500"
      >
        {data.name}
      </h1>
      <img
        className="w-56 h-56 mt-6 drop-shadow-xl 
                   transition-transform duration-500 hover:scale-110 hover:rotate-1"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={data.name}
      />
      <div
        className="flex flex-col mt-8 w-full max-w-lg 
                   border-2 border-gray-300 dark:border-gray-600 
                   rounded-2xl shadow-lg overflow-hidden 
                   bg-linear-to-b from-gray-100 to-gray-200 
                   dark:from-gray-800 dark:to-gray-900 
                   transition-colors duration-500"
      >
        <h2
          className="text-2xl font-semibold text-center 
                     bg-linear-to-r from-gray-300 to-gray-400 
                     dark:from-gray-700 dark:to-gray-800 
                     text-gray-900 dark:text-gray-100 p-3 
                     shadow-inner"
        >
          Descrições
        </h2>

        <div className="flex flex-col p-6 space-y-6">
          <div>
            <h3 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Tipo
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {data.types.map((t) => (
                <li
                  key={t.type.name}
                  className="px-3 py-1 rounded-full text-sm font-medium 
                             bg-blue-200 dark:bg-blue-600 
                             text-blue-900 dark:text-blue-100 
                             shadow hover:scale-105 transition-transform duration-300"
                >
                  {t.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Peso
            </h3>
            <p className="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
              {data.weight / 10} kg
            </p>
          </div>
          <div>
            <h3 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Habilidades
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {data.abilities.map((a) => (
                <li
                  key={a.ability.name}
                  className="px-3 py-1 rounded-lg text-sm font-medium 
                             bg-green-200 dark:bg-green-600 
                             text-green-900 dark:text-green-100 
                             shadow hover:scale-105 transition-transform duration-300"
                >
                  {a.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Status
            </h3>
            <ul className="space-y-3">
              {data.stats.map((s) => (
                <li key={s.stat.name} className="flex flex-col">
                  <span className="capitalize font-medium text-gray-800 dark:text-gray-200">
                    {s.stat.name}: {s.base_stat}
                  </span>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-1 shadow-inner">
                    <div
                      className="bg-linear-to-r from-blue-500 to-purple-500 
                                 dark:from-blue-400 dark:to-purple-400 
                                 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(s.base_stat / 200) * 100}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="mt-8 inline-block px-8 py-3 text-sm font-semibold 
                   text-white rounded-xl 
                   bg-linear-to-r from-blue-600 to-purple-600 
                   dark:from-blue-500 dark:to-purple-500 
                   shadow-lg hover:shadow-xl hover:scale-105 
                   transition-all duration-500
                   mb-8"
      >
        ← Voltar
      </Link>
    </div>
  );
};

export default Details;
