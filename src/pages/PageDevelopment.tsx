import { Warning } from "phosphor-react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">
          Esta página está em desenvolvimento👍.
        </h1>

        <Link to="/" className="mt-5 p-3 rounded bg-purple-500 text-lg">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
