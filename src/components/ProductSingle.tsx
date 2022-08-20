import { Popover } from '@headlessui/react';
import { Plus, X } from 'phosphor-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../context/BagContext';
import { useGetProductBySlugQuery } from '../graphql/generated';
import { IProducts } from '../types';
import Loading from './Loading';
import Sugestions from './Sugestions';

interface ProductProps {
  productSlug: string;
}

export default ({ productSlug }: ProductProps) => { 

  document.documentElement.scrollTop = 0;

  const navigate = useNavigate();
  const { addInBag } = useContext(BagContext);
  const { data } = useGetProductBySlugQuery({
    variables: {
      slug: productSlug
    }
  });
  
  if(!data || !data.product){
    return <Loading/>
  }

  //FINALIZAR COMPRA
  const productPurchase = (product: IProducts) => {
    addInBag(product);
    navigate("/purchase");
  }

  return(
    <div className="flex-1 p-5 sm:p-7 overflow-hidden">    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold">
            <span className="capitalize">
              {data.product.brand + " - "}
            </span>
            <span className="capitalize">
              {data.product.name}
            </span>
          </h1>
          <h2 className="text-gray-300 capitalize">
            {data.product.category}
          </h2>
          <p className="mt-5 text-base leading-relaxed">
            {data.product.description}
          </p>
          <span className="mt-5 block text-gray-100">
            Por apenas <br></br>
            <strong className="text-4xl font-extrabold text-purple-primary">
              R${data.product.price},00
            </strong> <br></br>
            em até 12x
          </span>

          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => productPurchase(data.product)}
              className="flex-1 py-2 bg-purple-primary font-medium rounded hover:bg-purple-secundary
              transition-colors focus:outline-offset-2 outline-purple-primary focus:outline outline-2"
            >
              Comprar
            </button>
            <button  
              onClick={() => addInBag(data.product)} 
              className="flex-1 py-2 flex justify-center items-center bg-white text-gray-900 
              font-medium rounded hover:bg-gray-200 transition-colors focus:outline-offset-2 
              outline-white focus:outline outline-2"
            >
              <Plus
                size={15}
                weight="bold"
                className="mr-1"
              />
              Sacola
            </button>
          </div>
        </div>

        <Popover className="flex items-center flex-col sm:flex-row">
          <Popover.Overlay className="fixed inset-0 bg-black opacity-80"/>

          <Popover.Panel className="w-full max-w-[40vw] p-2 fixed top-[50%] left-[50%] translate-x-[-50%] 
          translate-y-[-50%]">
            <Popover.Button className="p-1 flex items-center justify-center absolute top-5 right-5 rounded 
            bg-gray-600">
              <X
                size={17}
                weight="bold"
                className="text-gray-100"
              />
            </Popover.Button>

            <div className="p-10 bg-gray-700">
              <img 
                src={data.product.image.url}
                className="w-full"
              />
            </div>
          </Popover.Panel>

          <Popover.Button className="hover:cursor-zoom-in">
            <img 
              src={data.product.image.url}
              className="w-full sm:max-w-[30vw]"
            />
          </Popover.Button>

          <div className="flex sm:flex-col mt-5 sm:ml-5 sm:mt-0 gap-5">
            <span className="w-20 h-20 flex items-center justify-center bg-gray-700">.</span>
            <span className="w-20 h-20 flex items-center justify-center bg-gray-700">.</span>
            <span className="w-20 h-20 flex items-center justify-center bg-gray-700">.</span>
          </div>
        </Popover>

      </div>

      <Sugestions
        productSlug={productSlug} 
        productCategory={data.product.category}
      />
    </div>
  );
}