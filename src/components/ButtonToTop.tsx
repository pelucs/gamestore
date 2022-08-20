import classNames from "classnames";
import { CaretUp } from "phosphor-react";
import { useState } from "react";

export default () => {

  const [visibleButton, setVisiblButton] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    let windowY = document.documentElement.scrollTop;

    if(windowY > 200){
      setVisiblButton(true);
    } else {
      setVisiblButton(false);
    }
  })

  const toTop = () => {
    document.documentElement.scrollTop = 0;
  }

  return(
    <button
      onClick={toTop} 
      title="Voltar ao topo"
      className={classNames("p-1 fixed bottom-6 right-6 scale-0 flex items-center justify-center transition-all z-20 bg-gray-600 rounded hover:bg-gray-500 focus:outline outline-2 outline-offset-2 outline-gray-600" ,{
      "scale-100": visibleButton
    })}>
      <CaretUp
        size={25}
        weight="bold"
      />
    </button>
  );
}