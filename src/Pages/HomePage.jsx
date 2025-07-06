import { useEffect, useState } from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
      }

      const data = await response.json();

      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);
  return (
    <>
      <Header />
      <MainLayout pokemons={pokemons} />
    </>
  );
}
