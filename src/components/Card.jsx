export default function Card() {
  return (
    <div className=" rounded-md flex flex-col justify-between items-center cursor-pointer">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        alt="pokemon"
        className="w-24 h-24"
      />
      <div className=" w-full text-center">
        <h4 className="capitalizelize font-medium mt-2">Bulbasaur</h4>
      </div>
    </div>
  );
}
