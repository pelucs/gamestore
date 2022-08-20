import { PlusCircle } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "../context/BagContext";

import { useGetProductsQuery } from "../graphql/generated";
import { IProducts } from "../types";
import Loading from "./Loading";

export default () => {

  const { addInBag } = useContext(BagContext)
  const { data } = useGetProductsQuery();
  const [games, setGames] = useState<IProducts[]>();

  useEffect(() => {
    let newProducts = data?.products.filter(filter => filter.departament === "games");
    setGames(newProducts);
  }, [setGames]);

  if(!games){
    return <Loading/>
  }

  return(
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-7">
      {
        games.map(product => (
          <div key={product.id}>
            <Link 
              to={`/product/games/${product.slug}`}
              className="relative rounded overflow-hidden focus:outline outline-3 outline-offset-4 
              outline-purple-primary"
            >
              <span className="p-2 absolute top-3 left-3 text-xs font-bold rounded bg-purple-primary">
                R${product.price},00
              </span>
              <img 
                src={product.image.url}
                className="rounded"
              />
            </Link>

            <div className="py-3 flex justify-between">
              <div className="flex flex-col">
                <strong className="text-lg capitalize">
                  {product.name}
                </strong>
                <span className="text-sm font-bold text-gray-300 capitalize">
                  {product.brand}
                </span>
              </div>

              <button onClick={() => addInBag(product)}>
                <PlusCircle
                  size={30}
                  weight="regular"
                  className="text-purple-primary"
                />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}