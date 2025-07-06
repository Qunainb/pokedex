import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 fixed top-0 left-0 w-full">
      <nav className="flex justify-between ">
        <img src={logo} alt="logo" className="w-24" />
      </nav>
    </header>
  );
}
