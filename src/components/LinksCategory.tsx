import classnames from 'classnames'
import { useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { 
  CaretDown, 
  ComputerTower, 
  Cpu, 
  FinnTheHuman, 
  Headset, 
  Keyboard, 
  Laptop, 
  Monitor, 
  MouseSimple, 
  SpeakerHigh } from "phosphor-react";

export default () => {

  const { category } = useParams<{category: string}>();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCategory = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="mt-5">
      <div className="flex items-center justify-center lg:justify-between">
        <h1 className="hidden lg:block text-xs text-gray-300 uppercase font-bold">
          Categorias
        </h1>
        <button 
          onClick={handleCategory}
          className="p-1 flex items-center justify-center rounded bg-gray-600 focus:outline outline-2 
          outline-offset-2 outline-gray-600"
          title="Categorias"
        >
          <CaretDown
            size={17}
            weight="bold"
            className={classnames("text-gray-100 transition-all", {
              "rotate-180" : isOpen
            })}
          />
        </button>
      </div>

      <div className={classnames("mt-3 h-0 overflow-hidden", {
        "h-auto overflow-auto": isOpen
      })}>
        <a 
          href="/mouse"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Mouse"
        >
          <MouseSimple
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Mouse
          </span>
        </a>

        <a 
          href="/headset"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Headset"
        >
          <Headset
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Headset
          </span>
        </a>

        <a 
          href="/teclado"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Teclado"
        >
          <Keyboard
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Teclados
          </span>
        </a>

        <a 
          href="/"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Caixas de som"
        >
          <SpeakerHigh
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Caixas de som
          </span>
        </a>

        <a 
          href="/"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Computadores"
        >
          <ComputerTower
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Computadores
          </span>
        </a>

        <a 
          href="/notebook"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Notebooks"
        >
          <Laptop
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Notebooks
          </span>
        </a>

        <a 
          href="/hardware"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Hardware"
        >
          <Cpu
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Hardware
          </span>
        </a>

        <a 
          href="/monitor"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Monitores"
        >
          <Monitor
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Monitores
          </span>
        </a>

        <a 
          href="/jogos"
          className="py-2 flex items-center justify-center lg:justify-start gap-3 rounded outline-none 
          hover:bg-gray-600 lg:hover:px-2 focus:bg-gray-600 focus:px-2 transition-all"
          title="Jogos"
        >
          <FinnTheHuman
            size={20}
            weight="regular"
            className="text-gray-300"
          />
          <span className="hidden lg:block text-[.90rem] font-bold text-gray-300">
            Jogos
          </span>
        </a>
      </div>
    </div>
  );
}