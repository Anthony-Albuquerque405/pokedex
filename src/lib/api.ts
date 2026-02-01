const baseURL = "https://pokeapi.co/api/v2/";

export async function getPokemonById(id: number): Promise<{
  species: { name: string; url: string };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  abilities: { slot: number; ability: { name: string; url: string } }[];
  name: string;
  weight: number;
  height: number;
  id: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: { front_default: string };
}> {
  const res = await fetch(baseURL + "pokemon/" + id);
  const data = await res.json();

  return data;
}

export async function getAllPokemon(
  offset: number = 5,
  limit: number = 580,
): Promise<{
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
}> {
  const res = await fetch(`${baseURL}/pokemon?offset=${offset}&limit=${limit}`);
  const data = await res.json();

  return data;
}
