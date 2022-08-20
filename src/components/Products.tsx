import { Link } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'
import { useGetProductsQuery } from '../graphql/generated'
import { useContext, useEffect, useState } from 'react'
import { IProducts } from '../types'
import { BagContext } from '../context/BagContext'

import Loading from './Loading'

export default () => {

  const { addInBag } = useContext(BagContext);
  const { data } = useGetProductsQuery();
  const [computing, setComputing] = useState<IProducts[]>();

  useEffect(() => {
    //CORRIGIR
    let newProducts = data?.products.filter(filter => filter.departament === "computing");

    setComputing(newProducts);
  }, [data]);

  if(!computing){
    return <Loading/>
  }

  return(
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-7">
      {computing.map(product => (
        <div key={product.id} className="relative mt-10 hover:scale-105 transition-all">
          <Link 
            // to={`/product/${product.departament}/${product.slug}`}
            to="/development"
            className="h-full flex flex-col rounded px-5 pb-10 mt-7 items-center bg-gray-700 focus:outline 
            outline-4 outline-gray-500"
          >
            <img 
              src={product.image.url}
              className="p-3 sm:p-0 max-w-[180px] -mt-9 z-10"
            />

            <div className="mt-0 sm:mt-5 flex flex-col items-center">
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
  );
}