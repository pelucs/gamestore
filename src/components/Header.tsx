import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo-35x.png'
import ButtonsHeader from './ButtonsHeader';
import MenuHamb from './MenuHamb';

export default () => {

  const [activeHeader, setActiveHeader] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    let windowY = document.documentElement.scrollTop;

    if(windowY > 60){
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  })

  return(
    <div className="w-full py-2 px-5 sm:py-5 flex items-center justify-between bg-gray-700 border-b 
    border-gray-600 transition-all">
      <MenuHamb/>

      <Link to="/">
        <img src={logotipo} className="w-[50px] hidden sm:w-full sm:block"/>
        <img src={logo} className="w-[20px] block sm:hidden"/>
      </Link>

      <ButtonsHeader/>
    </div>
  );
}