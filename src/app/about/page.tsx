const About = async () => {
  return (
    <div
      className="min-h-screen bg-linear-to-b from-gray-50 to-gray-200 
                    dark:from-gray-900 dark:to-gray-800 
                    transition-colors duration-500 pt-6"
    >
      {/* Header */}
      <div className="flex justify-center items-center gap-8 mb-10">
        <h1
          className="text-5xl italic font-extrabold 
                     bg-linear-to-r from-blue-600 to-purple-600 
                     dark:from-blue-400 dark:to-purple-400 
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Sobre o Projeto
        </h1>
        <div
          className="w-24 h-24 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mRvTjxKhhdy2l4oc3E4H7goQ8kP5GK2F0w&s')] 
                     bg-cover bg-center rounded-full shadow-lg 
                     hover:scale-110 transition-transform duration-500"
        ></div>
      </div>

      {/* Pikachu */}
      <div className="flex justify-center items-center mb-12">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          className="w-44 h-44 drop-shadow-xl 
                     transform transition-transform duration-500 
                     hover:scale-110 hover:rotate-3"
        />
      </div>

      {/* Card */}
      <div
        className="max-w-3xl mx-auto p-10 
                   bg-white dark:bg-gray-800 
                   shadow-2xl rounded-2xl 
                   transition-colors duration-500 
                   hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      >
        {/* Objetivo */}
        <h2
          className="text-3xl font-bold 
                       bg-linear-to-r from-blue-600 to-purple-600 
                       dark:from-blue-400 dark:to-purple-400 
                       bg-clip-text text-transparent mb-6"
        >
          Objetivo
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Este projeto tem como finalidade treinar e praticar o consumo de APIs
          REST, utilizando como base uma API pública de Pokémons. A ideia
          central é aplicar conceitos de integração entre sistemas, manipulação
          de dados e construção de aplicações que se comunicam com serviços
          externos.
        </p>

        {/* Descrição */}
        <h2
          className="text-3xl font-bold 
                       bg-linear-to-r from-blue-600 to-purple-600 
                       dark:from-blue-400 dark:to-purple-400 
                       bg-clip-text text-transparent mb-6"
        >
          Descrição
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          A API de Pokémons fornece informações detalhadas sobre diferentes
          criaturas, incluindo:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
          <li className="hover:translate-x-1 transition-transform duration-300">
            Nome e número identificado
          </li>
          <li className="hover:translate-x-1 transition-transform duration-300">
            Tipos (fogo, água, planta, etc.)
          </li>
          <li className="hover:translate-x-1 transition-transform duration-300">
            Evoluções e formas alternativas
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          O projeto consiste em criar uma aplicação que consuma esses dados e os
          apresente de forma organizada, permitindo ao usuário explorar o
          universo dos Pokémons de maneira prática e interativa.
        </p>
      </div>
    </div>
  );
};

export default About;
