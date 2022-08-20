import classNames from "classnames";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";

export default () => {

  const [handleWarning, setHandleWarning] = useState<boolean>(true);

  const handleStateWarning = (state: boolean) => {
    localStorage.setItem("modal-warning", `${state}`)

    setHandleWarning(state);
  }

  useEffect(() => {
    if(localStorage.getItem("modal-warning") === "false"){
      setHandleWarning(false);
    }
  }, []);

  return(
    <div className={classNames("w-full py-1 px-3 flex items-center justify-between bg-purple-primary transition-all", {
      "hidden": !handleWarning
    })}>
      <strong className="text-[.65rem] sm:text-xs w-[90%] sm:w-full">
        Declado todos os direitos de imagens as respectivas marcas. Este site possui preços
        meramente demostrativos, por favor, desconsidera-los.
      </strong>
      <button 
        onClick={() => handleStateWarning(false)}
      >
        <X
          size={17}
          weight="bold"
        />
      </button>
    </div>
  );
}