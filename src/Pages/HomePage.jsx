import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../util/http";

export default function HomePage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isLoading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center mt-4 text-red-500">{error.message}</p>;
  }

  return (
    <>
      <Header />
      <MainLayout pokemons={data} />
    </>
  );
}
