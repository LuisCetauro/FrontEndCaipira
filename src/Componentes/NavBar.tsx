import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="border-b-8 border-cor3 flex flex-row gap-3 h-16 sticky top-0  bg-cor1 text-white  lg:gap-72">
      <div className="ml-2 mt-4 lg:ml-24 2xl:ml-96">
        <Link className="border-2 border-cor2 p-2 rounded-2xl" to="/">
          Home
        </Link>
      </div>
      <div className="mt-4">
        <Link className="border-2 border-cor2 p-2 rounded-2xl" to="/Search">
          Pesquisar
        </Link>
      </div>
      <div className="mt-4">
        <Link className="border-2 border-cor2 p-2 rounded-2xl" to="/Add">
          Adicione
        </Link>
      </div>
      <div className="mt-4">
        <Link className="border-2 border-cor2 p-2 rounded-2xl" to="/Delete">
          Deletar
        </Link>
      </div>
    </div>
  );
}
