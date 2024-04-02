import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="flex gap-5 items-center">
      <img src={logo} alt="Logo" />

      <a href="text-gray-200 font-medium" className="">
        Eventos
      </a>
      <a href="" className="text-white font-medium ">
        Participantes
      </a>
    </header>
  );
}
