import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { GiStarProminences as LogoIcon } from "react-icons/gi";

export function AppBar() {
  return (
    <header className="bg-black p-3 flex flex-row justify-between">
      <div className="flex flex-row items-center gap-5">
        <Logo />
        <Link
          to="/"
          className="text-purple-200 hover:text-purple-400 font-bold hidden md:block"
        >
          Home
        </Link>
      </div>

      <div className="flex flex-row items-center gap-10">
        <LinkButton
          to="/criar-notepad"
          className=" bg-purple-800 hover:bg-purple-500 text-slate-50 font-bold uppercase p-5 rounded"
        >
          Novo Notepad
        </LinkButton>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex flex-row items-center gap-1">
      <LogoIcon className="text-purple-800 text-4xl" />
      <h1 className="text-lg text-purple-800 uppercase font-bold">
        Universe Pads
      </h1>
    </Link>
  );
}
