export default function Card({ data }) {
  const urlParts = data.url.split("/");
  const pokeId = urlParts[urlParts.length - 2];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`;
  return (
    <div className=" rounded-md flex flex-col justify-between items-center cursor-pointer">
      <img src={imgUrl} alt="pokemon" className="w-24 h-24" />
      <div className=" w-full text-center">
        <h4 className="capitalize font-medium mt-1">{data.name}</h4>
      </div>
    </div>
  );
}
