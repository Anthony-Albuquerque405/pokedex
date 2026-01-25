import Pokemon from "@/components/Pokemon";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mt-8">
        <div
          className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mRvTjxKhhdy2l4oc3E4H7goQ8kP5GK2F0w&s)] bg-cover size-18 bg-radial rounded-full
        "
        ></div>
        <h1
          className="text-4xl italic
        "
        >
          Poke-Dex
        </h1>
      </div>
      <Pokemon />
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-wide">Poke-Dex</h1>
          <p className="text-gray-400 mt-2">
            Todos os direitos reservados © 2026
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Pokémons
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
