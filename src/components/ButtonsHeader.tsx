import { Popover } from "@headlessui/react";
import { Bell, HandbagSimple, SignOut, User, X } from "phosphor-react";
import { useContext } from "react";
import { BagContext } from "../context/BagContext";

import ItemInBag from "./ItemInBag";

export default () => {

  const { bag } = useContext(BagContext);

  return(
    <div className="flex items-end gap-5">
      <Popover className="hidden sm:inline">
        <Popover.Panel className="w-[348px] h-screen fixed top-0 right-0 z-20 bg-gray-700 border-l 
        border-gray-600">
          <div className="h-16 px-4 flex items-center justify-between">
            <h1 className="font-bold text-lg">Notificações</h1>

            <Popover.Button className="p-1 flex items-center justify-center rounded bg-gray-600
            focus:outline outline-2 outline-gray-500 outline-offset-2">
              <X
                size={17}
                weight="bold"
                className="text-gray-100"
              />
            </Popover.Button>
          </div>

          <div className="flex-1 h-screen flex items-center justify-center">
            <strong className="text-sm text-center text-gray-400">
              Você não possui <br></br> nenhuma notificação
            </strong>
          </div>

        </Popover.Panel>

        <Popover.Button className="relative">
          <Bell
            size={23}
            className="text-gray-100"
          />
          <span className="w-3 h-3 absolute top-0 rounded-full bg-purple-primary"></span>
        </Popover.Button>
      </Popover>

      <Popover>
        <Popover.Panel 
          className="w-[348px] h-screen fixed top-0 right-0 z-20 bg-gray-700 border-l 
          border-gray-600 overflow-y-auto"
        >
          <div className="h-16 px-4 flex items-center justify-between">
            <h1 className="font-bold text-lg">Sacola de produtos</h1>

            <Popover.Button 
              
              className="p-1 flex items-center justify-center rounded bg-gray-600
              focus:outline outline-2 outline-gray-500 outline-offset-2">
              <X
                size={17}
                weight="bold"
                className="text-gray-100"
              />
            </Popover.Button>
          </div>

          <ItemInBag/>
        </Popover.Panel>

        <Popover.Button className="relative" >
          <HandbagSimple
            size={23}
            className="text-gray-100"
          />
          {bag.length !== 0 && 
            <span className="w-4 h-4 sm:w-5 sm:h-5 text-xs flex items-center justify-center absolute 
            -top-1 sm:-top-2 -right-1 sm:-right-2 rounded-full bg-purple-primary">
              {bag.length}
            </span>
          }
        </Popover.Button>
      </Popover>

      <Popover className="hidden sm:inline">
        <Popover.Panel className="w-[150px] fixed top-14 right-5 flex flex-col rounded z-20
        bg-gray-700 overflow-hidden">
          <a 
            href="#"
            className="w-full p-3 flex items-center text-sm hover:bg-gray-600 transition-colors"
          >
            <User
              size={20}
              weight="bold"
              className="text-gray-100 mr-2"
            />
            Perfil  
          </a>
          <a 
            href="#"
            className="w-full p-3 flex items-center text-sm hover:bg-gray-600 transition-colors"
          >
            <SignOut
              size={20}
              weight="bold"
              className="text-gray-100 mr-2"
            />
            Sair  
          </a>
        </Popover.Panel>

        <Popover.Button>
          <User
            size={23}
            className="text-gray-100"
          />
        </Popover.Button>
      </Popover>
    </div>
  );
}