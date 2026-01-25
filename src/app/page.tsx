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
    </div>
  );
}
