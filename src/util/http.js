export async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const data = await response.json();

  return data.results;
}
