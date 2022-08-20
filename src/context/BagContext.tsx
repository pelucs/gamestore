import { useState, createContext, ReactNode, useEffect } from "react";
import { IProducts } from "../types";

interface BagContextProviderProps {
  children: ReactNode;
}

interface BagContext {
  bag: IProducts[];
  activeModalAddInBag: boolean;
  addInBag: (item: IProducts) => void;
  setActiveModalAddInBag: (newState: boolean) => void;
  removeInBag: (slug: string) => void;
  clearBag: () => void;
}

export const BagContext = createContext({} as BagContext);

export const BagContextProvider = ({ children }: BagContextProviderProps) => {

  const [bag, setBag] = useState<IProducts[]>([]);
  const [activeModalAddInBag, setActiveModalAddInBag] = useState<boolean>(false); 

  //ADICIONAR NA SACOLA
  const addInBag = (product: IProducts) => {
    setBag([...bag, product]);

    setActiveModalAddInBag(true);
  }


  //REMOVER ITEM DA SACOLA
  const removeInBag = (slug: string) => {
    let newProducts = bag.filter(items => items.slug !== slug);

    setBag(newProducts);
  }

  //LIMPAR SACOLA
  const clearBag = () => {
    setBag([]);
  }

  return(
    <BagContext.Provider 
      value={{ bag, activeModalAddInBag, setActiveModalAddInBag, removeInBag, addInBag, clearBag }}
    >
      {children}
    </BagContext.Provider>
  );
}