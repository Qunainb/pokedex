import Card from "./Card";

export default function MainLayout() {
  return (
    <section className=" mt-24 grid gap-2  sm:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
      <Card />
    </section>
  );
}
