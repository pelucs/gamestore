import { Link } from "react-router-dom";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { BagContext } from "../context/BagContext";

export default () => {

  const { bag, removeInBag } = useContext(BagContext);

  return(
    <div className="mb-5">
      {
        bag.length !== 0 ?
          <div className="px-4 flex flex-col gap-4">
            {
              bag.map(product => (
                <div key={product.id} className="h-24 relative flex items-center 
                justify-between rounded bg-gray-600">
                  <Link
                    // to={`/product/${product.departament}/${product.slug}`}
                    to="/development"
                    className="py-4 pr-3 flex-1 flex items-end justify-between overflow-hidden whitespace-nowrap 
                    text-ellipsis rounded focus:outline outline-4 outline-purple-primary"
                  >
                    <div className="flex items-center">
                      <img src={product.image.url} className="max-w-[65px] px-2"/>
          
                      <div className="flex flex-col">
                        <strong className="text-sm">
                          <span className="capitalize">
                            {product.brand + " - "}
                          </span>
                          <span className="capitalize">
                            {product.name}
                          </span>
                        </strong>
                        <span className="text-xs text-gray-300 capitalize">
                          {product.category}
                        </span>
                        <strong className="mt-2 text-sm text-purple-primary">
                          R${product.price},00
                        </strong>
                      </div>
                    </div>

                    <span className="underline text-xs">
                      Ver item
                    </span>
                  </Link>
          
                  <button 
                    title="Remover item"
                    onClick={() => removeInBag(product.slug)}
                    className="absolute right-3 top-4" 
                  >
                    <Trash
                      size={20}
                    />
                  </button>
                </div>
              ))
            }

            <Link
              to="/purchase"
              className="w-full py-3 flex items-center justify-center bg-purple-primary rounded 
              hover:bg-purple-secundary focus:outline outline-2 outline-offset-2 
              outline-purple-primary transition-colors"
            >
              Finalizar compra
            </Link>
          </div>
        :
          <div className="flex-1 h-screen flex items-center justify-center">
            <strong className="text-sm text-center text-gray-400">
              Você não possui <br></br> nenhum item na sacola
            </strong>
          </div>
      }
    </div>
  );
}