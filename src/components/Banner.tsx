import { ArrowCircleRight } from "phosphor-react";
import { Link } from "react-router-dom";

export default () => {
  return(
    <div className="mt-20">
      <h1 className="text-2xl font-medium text-gray-100">
        Veja também
      </h1>

      <div className="mt-7 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Link
          to="/headset"
          className="h-[270px] p-5 flex flex-col justify-between rounded border-4 
          border-gray-600 bg-bannerHeadset bg-center bg-cover bg-no-repeat outline-none
          focus:border-purple-secundary"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Headsets a partir de
            </span>
            <strong className="text-purple-primary text-lg">
              R$15,00
            </strong>
            <h1 className="mt-3 text-lg font-bold">
              Melhore suas skills
            </h1>
            <p className="max-w-xs text-gray-300 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur temporibus 
              ex sit? Sit eos voluptate dignissimos sapiente fugit dolorem aspernatur. Quaerat, 
              maiores culpa. Non ab soluta voluptatibus ratione vitae.
            </p>
          </div>

          <button
            className="p-1 flex items-center text-sm rounded focus:outline outline-2 outline-gray-600"
            >
            <ArrowCircleRight
              size={25}
              weight="bold"
              className="text-purple-primary mr-2"
            />

            Ver mais produtos
          </button>
        </Link>

        <Link
          to="/cadeira"
          className="h-[270px] p-5 flex flex-col justify-between rounded border-4 
          border-purple-secundary bg-bannerCadeira bg-center bg-cover bg-no-repeat outline-none
          focus:border-gray-600"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-100">
              Cadeiras a partir de
            </span>
            <strong className="text-white text-lg">
              R$579,00
            </strong>
            <h1 className="mt-3 text-lg font-bold">
              Jogue no conforto
            </h1>
            <p className="max-w-xs text-gray-100 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur temporibus 
              ex sit? Sit eos voluptate dignissimos sapiente fugit dolorem aspernatur. Quaerat, 
              maiores culpa. Non ab soluta voluptatibus ratione vitae.
            </p>
          </div>

          <button
            className="p-1 flex items-center text-sm rounded focus:outline outline-2 outline-gray-600"
            >
            <ArrowCircleRight
              size={25}
              weight="bold"
              className="text-gray-100 mr-2"
            />

            Ver mais produtos
          </button>
        </Link>
      </div>
    </div>
  );
}