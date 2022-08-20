import visa from '../assets/visa.png';
import paypal from '../assets/paypal.png';
import master from '../assets/master.png';

import classNames from 'classnames';
import { useState } from 'react';

export default () => {

  const [dateExperiation, setDateExperiation] = useState<string>("");
  const [activeButtonOptionCard, setActiveButtonOptionCard] = useState<number>();

  const handleExpirationDate = (value: string) => {
    if(value.length === 2){
      setDateExperiation(value + "/");
    } else{
      setDateExperiation(value);
    }
  }

  const handleOptionCard = (index: number) => {
    if(index === 1){
      setActiveButtonOptionCard(1);
    } else if(index === 2){
      setActiveButtonOptionCard(2);
    } else if(index === 3){
      setActiveButtonOptionCard(3);
    }
  }

  return(
    <div className="w-full sm:w-[448px] p-10 bg-purple-primary">
      <h1 className="text-2xl font-medium text-gray-100">
        Detalhes do cartão
      </h1>
      <span className="block mt-5 text-base text-gray-100">
        Selecione a bandeira do cartão
      </span>

      <div className="mt-5 flex items-center gap-5">
        <button 
          onClick={() => handleOptionCard(1)}
          className={classNames("flex items-center justify-center rounded hover:bg-purple-secundary hover:px-5 h-10 transition-all", {
            "bg-purple-secundary px-5": activeButtonOptionCard === 1
          })}
        >
          <img src={visa} className="w-[50px]"/>
        </button>

        <button 
          onClick={() => handleOptionCard(2)}
          className={classNames("flex items-center justify-center rounded hover:bg-purple-secundary hover:px-5 h-10 transition-all", {
            "bg-purple-secundary px-5": activeButtonOptionCard === 2
          })}
        >
          <img src={paypal} className="w-[50px]"/>
        </button>

        <button 
          onClick={() => handleOptionCard(3)}
          className={classNames("flex items-center justify-center rounded hover:bg-purple-secundary hover:px-5 h-10 transition-all", {
            "bg-purple-secundary px-5": activeButtonOptionCard === 3
          })}
        >
          <img src={master} className="w-[50px]"/>
        </button>
      </div>

      <div className="mt-5 text-base text-gray-100">
        <h1>
          Insira os dados do seu cartão
        </h1>

        <input
          type="text"
          placeholder="Número do cartão"
          className="w-full mt-5 py-3 bg-transparent border-b border-white outline-none"
        />

        <div className="mt-5 flex-1 grid grid-cols-2 gap-20">
          <input
            type="text"
            placeholder="00/00"
            value={dateExperiation}
            maxLength={5}
            onChange={e => handleExpirationDate(e.target.value)}
            className="py-3 bg-transparent border-b border-white outline-none"
          />
          <input
            type="text"
            placeholder="CVV"
            maxLength={3}
            className="py-3 bg-transparent border-b border-white outline-none"
          />
        </div>

        <button className="mt-7 w-full py-3 bg-white text-purple-primary text-sm font-medium rounded
        focus:outline outline-2 outline-offset-2 outline-white">
          Finalizar compra
        </button>

        <p className="mt-10 text-xs text-center">
          *Não insira os dados de algum cartão real, este site é para demostração.
        </p>
      </div>
    </div>
  );
}