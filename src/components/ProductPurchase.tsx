import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import razer from '../assets/headset-razer.png'
import { BagContext } from '../context/BagContext';

interface ProductPurchaseProps {
  handlePrice: () => void;
}

export default ({ handlePrice }: ProductPurchaseProps) => {

  const { bag, removeInBag } = useContext(BagContext);

  const handleProductsBag = (slug: string) => {
    removeInBag(slug);
    handlePrice();
  }

  return(
    <div className="mt-5  sm:text-basesm:mt-7 flex flex-col gap-5">
      {
        bag && 
          bag.map(product => (
            <div key={product.id} className="flex items-center">
              <div className="w-full h-20 py-4 px-2 sm:px-5 rounded bg-gray-700 flex items-center 
                justify-between"
              >
                <div className="flex items-center">
                  <div className="w-[40px] sm:w-[70px]">
                    <img src={product.image.url} className="w-full"/>
                  </div>
          
                  <div className="h-full px-2 sm:px-7 flex flex-col justify-center items-start">
                    <strong className="text-[.65rem] sm:text-base capitalize">
                      {product.name}
                    </strong>
                    <h1 className="text-[.65rem] sm:text-sm text-gray-300 capitalize">
                      {product.category}
                    </h1>
                  </div>
                </div>
        
                <div className="flex items-center">
                  <div className="h-full px-2 sm:px-7 flex items-center border-l border-r border-gray-600">
                    <h1 className="text-[.65rem] sm:text-base capitalize">
                      {product.brand}
                    </h1>
                  </div>
          
                  <div className="h-full px-2 sm:px-7 flex items-center border-r border-gray-600">
                    <span className="mr-2 sm:mr-5 text-[.65rem] sm:text-xs text-gray-300">
                      Preço
                    </span>
                    <strong className="text-[.65rem] sm:text-base">
                      R${product.price},00
                    </strong>
                  </div>
          
                  <div className="h-full px-2 sm:px-7 flex items-center">
                    <Link
                      // to={`/product/${product.departament}/${product.slug}`}
                      to="/development"
                      className="text-[.65rem] sm:text-xs underline"
                    >
                      Ver item
                    </Link>
                  </div>
                </div>
              </div>
        
              <button 
                title="Remover item" 
                className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-r
              focus:bg-purple-primary outline-none"
                onClick={() => handleProductsBag(product.slug)}
              >
                <Trash
                  size={20}
                />
              </button>
            </div>
          ))
      }
    </div>
  );
}