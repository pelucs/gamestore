import { MagnifyingGlass } from "phosphor-react";
import Search from "./Search";

export default () => {
  return(
    <div className="p-5">
      <div className="flex-1 flex items-center bg-gray-600 rounded">
        <MagnifyingGlass
          size={17}
          weight="bold"
          className="absolute ml-2 text-gray-300"
        />
        <input 
          type="text"
          placeholder="Pesquise aqui"
          className="w-full h-[35px] pl-8 pr-3 text-xs bg-transparent outline-none"
        />
      </div>
    </div>
  );
}