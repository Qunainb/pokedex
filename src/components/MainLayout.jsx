import Card from "./Card";

export default function MainLayout({ pokemons }) {
  console.log(pokemons);
  return (
    <section className=" mt-24 grid gap-2  sm:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
      {pokemons.map((pokemon, index) => (
        <Card key={index} data={pokemon} />
      ))}
    </section>
  );
}
