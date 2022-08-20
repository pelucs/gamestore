import { useContext } from "react";
import { BagContext } from "../context/BagContext";
import classNames from "classnames";

export default () => {

  const { activeModalAddInBag, setActiveModalAddInBag } = useContext(BagContext);

  if(activeModalAddInBag){
    setTimeout(() => {
      setActiveModalAddInBag(false)
    }, 2000)
  }

  return(
    <div className={classNames("fixed  right-6 z-20 py-3 px-5 bg-gray-600 rounded border-l-4 border-purple-primary transition-all", {
      "-top-20": !activeModalAddInBag,
      "top-6": activeModalAddInBag
    })}>
      <strong className="font-light text-base">
        Item adicionado na <br></br> sacola
      </strong>
    </div>
  );
}

