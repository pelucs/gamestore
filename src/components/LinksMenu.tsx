import { Cube, Gear, Headset, Heart, House, User } from "phosphor-react";
import { Link } from "react-router-dom";

export default () => {
  return(
    <div className="lg:mt-5">
      <h1 className="text-xs text-gray-300 uppercase font-bold">
        Menu
      </h1>

      <div className="mt-3">
        <Link 
          to="/" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Início"
        >
          <House
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Início
          </span>
        </Link>

        <a 
          href="#" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Perfil"
        >
          <User
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Perfil
          </span>
        </a>

        <a 
          href="#" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Favoritos"
        >
          <Heart
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Favoritos
          </span>
        </a>

        <a 
          href="#" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Meus pedidos"
        >
          <Cube
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Meus pedidos
          </span>
        </a>

        <a 
          href="#" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Central de ajuda"
        >
          <Headset
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Central de ajuda
          </span>
        </a>

        <a 
          href="#" 
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Configurações"
        >
          <Gear
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Configurações
          </span>
        </a>
      </div>
    </div>
  );
}