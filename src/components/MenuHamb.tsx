import classNames from "classnames";
import { useState } from "react";
import LinksMenuHamb from "./LinksMenuHamb";
import Search from "./Search";

export default () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const handleMenuHamb = () => {
    
    setActiveMenu(!activeMenu);
    
    if(activeMenu){
      document.body.style.overflow = "auto";
    } else{
      document.body.style.overflow = "hidden";
    }
  }

  return(
    <div className="sm:hidden">
      <button 
        className="w-5 h-3 flex flex-col justify-between" 
        onClick={handleMenuHamb}
      >
        <div className={classNames("w-5 h-[2px] bg-white transition-all", {
          "rotate-[135deg] relative top-[4px]": activeMenu
        })}>
        </div>
        <div className={classNames("w-5 h-[2px] bg-white transition-all", {
          "rotate-[-135deg] relative top-[-6px]": activeMenu
        })}>
        </div>
      </button>

      <div className={classNames("w-full fixed top-[46px] left-0 bg-gray-700 z-20 overflow-hidden transition-all", {
        "h-screen": activeMenu,
        "h-0": !activeMenu
      })}>
        <LinksMenuHamb/>
      </div>
    </div>
  );
}