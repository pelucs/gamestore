import { ArrowCircleLeft, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BagContext } from "../context/BagContext";
import ProductPurchase from "./ProductPurchase";

export default () => {

  document.documentElement.scrollTop = 0;

  const { bag, clearBag } = useContext(BagContext);
  const [totalPrice, setTotalPrice] = useState<number>();

  if(bag.length === 0){
    window.location.href = "/";
  }

  const calculatePrice = () => {
    let price = bag.map(product => Number(product.price)),
        reduce = (acumulator: number, current: number) => acumulator + current;
    
    setTotalPrice(price.reduce(reduce));
  }
  
  useEffect(() => {
    calculatePrice();

  }, []);

  return(
    <div className="flex-1 p-5 sm:p-7">
      <h1 className="text-2xl font-medium text-gray-100">
        Produtos
      </h1>

      <ProductPurchase handlePrice={calculatePrice} />

      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-5">
        <div className="h-[70px] text-[.65rem] sm:text-base flex items-center justify-center rounded bg-gray-700">
          <span className="text-xs text-gray-300 mr-3">
            Total
          </span>
          <strong className="">
            R${totalPrice},00
          </strong>
        </div>

        <button 
          className="h-[70px] text-[.65rem] sm:text-base flex items-center justify-center rounded bg-gray-700"
          onClick={() => clearBag()}
        >
          <Trash
            size={20}
            className="mr-2"
          />
          Limpar sacola
        </button>

        <Link
          to="/"
          className="h-[70px] text-[.65rem] sm:text-base flex items-center justify-center rounded 
          bg-gray-700"
        >
          <ArrowCircleLeft
            size={20}
            className="mr-2"
          />
          Voltar para o shopping
        </Link>
      </div>
    </div>
  );
}