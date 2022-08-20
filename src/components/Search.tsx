import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../graphql/generated";
import { IProducts } from "../types";

import Loading from "./Loading";

export default () => {

  const { data } = useGetProductsQuery();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<IProducts[]>([]);

  if(!data || !data.products){
    return <Loading/>
  }

  const handleSearchBox = (value: string) => {
    let newProducts = data.products.filter(filter => filter.name.includes(search) || 
    filter.brand.includes(search) || filter.category.includes(search));

    setSearch(value);
    setProducts(newProducts);
  }

  return(
    <div className="relative hidden lg:block">
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
            value={search}
            onChange={(e) => handleSearchBox(e.target.value.toLocaleLowerCase())}
          />
      </div>

      {search.length !== 0 && (
        <div className="w-[360px] p-4 absolute top-0 left-60 bg-gray-700 rounded z-20">
          <h1 className="text-lg break-words">
            Resultado da pesquisa: {search}
          </h1>

          <div className="mt-5 flex flex-col">
            {products.map(product => (
              <Link
                key={product.id} 
                onClick={() => setSearch("")}
                to={`/product/${product.departament}/${product.slug}`} 
                className="flex-1 py-3 h-[90px] flex items-center border-b border-gray-600 
                last-of-type:border-none hover:bg-gray-600 rounded hover:px-3 transition-all 
                focus:outline focus:outline-2 focus:outline-purple-primary focus:px-3"
              >
                <img src={product.image.url} className="max-w-[65px]"/>
    
                <div className="flex flex-col ml-2">
                  <strong className="text-sm capitalize">
                    {product.brand} - {product.name}
                  </strong>
                  <span className="text-xs text-gray-300 capitalize">
                    {product.category}
                  </span>
                  <strong className="mt-2 text-sm text-purple-primary">
                    R${product.price},00
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}