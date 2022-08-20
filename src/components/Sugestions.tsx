import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../graphql/generated";
import { IProducts } from "../types";

import Loading from "./Loading";

interface SugestionProps {
  productCategory: string;
  productSlug: string;
}

export default ({ productCategory, productSlug }: SugestionProps) => {

  const { data } = useGetProductsQuery();
  const [sugestions, setSugestions] = useState<IProducts[]>();

  useEffect(() => {
    if(data){
      let filterProducts = data.products.filter(items => items.category == productCategory),
          newProducts = filterProducts.filter(items => items.slug !== productSlug)

      setSugestions(newProducts);
    }
  }, [data]);

  if(!sugestions){
    return <Loading/>
  }

  return(
    <div className="mt-16">
      <h1 className="text-2xl font-bold">
        Sugestões úteis
      </h1>

      <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-5">
        {sugestions.map(product => (
          <a
            key={product.id}
            href={`/product/${product.departament}/${product.slug}`}
            className="w-[220px] bg-gray-700 p-3 rounded hover:scale-105 transition-all"
          >
            <img 
              src={product.image.url}
              className="rounded"  
            />
  
            <div className="mt-3">
              <h2 className="capitalize">
                {product.name}
              </h2>
              <h1 className="text-xs text-gray-300 capitalize">
                {product.brand}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}