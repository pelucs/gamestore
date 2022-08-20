import { PlusCircle } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "../context/BagContext";
import { useGetProductsQuery } from "../graphql/generated";
import { IProducts } from "../types";
import Loading from "./Loading";

interface CategoryProps {
  categoryProducts: string;
}

export default ({ categoryProducts }: CategoryProps) => {

  const { addInBag } = useContext(BagContext);
  const { data } = useGetProductsQuery();
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    if(data){
      let newProducts = data.products.filter(items => items.category == categoryProducts)

      setProducts(newProducts);
    }
  }, [data]);

  if(!products){
    return <Loading/>
  }

  return(
    <div className="flex-1 p-5 min-h-screen">
      <h1 className="text-2xl font-medium text-gray-100 capitalize">
        {categoryProducts}
      </h1>

      <div className="grid grid-cols-4 gap-7">
        {products.map(product => (
          <div key={product.id} className="relative mt-10 hover:scale-105 transition-all">
            <Link 
              key={product.id}
              to={`/product/${product.departament}/${product.slug}`}
              className="h-full flex flex-col rounded px-5 pb-10 mt-7 items-center bg-gray-700 focus:outline 
              outline-4 outline-gray-500"
            >
              <img 
                src={product.image.url}
                className="max-w-[180px] -mt-9 z-10"
              />

              <div className="mt-3 flex flex-col items-center">
                <strong className="text-sm text-center">
                  <span className="capitalize">
                    {product.brand + " - "}
                  </span>
                  <span className="capitalize">
                    {product.name}
                  </span>
                </strong>
                <h1 className="text-xs text-gray-300 capitalize">
                  {product.category}
                </h1>
                <strong className="mt-4 text-lg font-bold text-purple-primary">
                  R${product.price},00
                </strong>
              </div>
            </Link>

            <button
              onClick={() => addInBag(product)} 
              className="absolute -bottom-2 left-[50%] translate-x-[-50%] p-1 w-[50%] flex items-center 
              text-[0.65rem] outline-none font-bold rounded focus:bg-purple-primary group"
              >
              <PlusCircle
                size={25}
                weight="bold"
                className="text-purple-primary mr-2 group-focus:text-white"
              />

              ADD SACOLA
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}