const About = async () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-3">
      <div className="flex justify-center items-center gap-8 mb-6">
        <h1 className="text-4xl italic font-semibold text-gray-800 dark:text-gray-100">
          Sobre o Projeto
        </h1>
        <div
          className="w-20 h-20 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mRvTjxKhhdy2l4oc3E4H7goQ8kP5GK2F0w&s')] 
                     bg-cover bg-center rounded-full shadow-md"
        ></div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          className="w-40 h-40 drop-shadow-lg"
        />
      </div>
      <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl transition-colors duration-300">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Objetivo
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Este projeto tem como finalidade treinar e praticar o consumo de APIs
          REST, utilizando como base uma API pública de Pokémons. A ideia
          central é aplicar conceitos de integração entre sistemas, manipulação
          de dados e construção de aplicações que se comunicam com serviços
          externos.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Descrição
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          A API de Pokémons fornece informações detalhadas sobre diferentes
          criaturas, incluindo:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
          <li>Nome e número identificado</li>
          <li>Tipos (fogo, água, planta, etc.)</li>
          <li>Evoluções e formas alternativas</li>
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
