import { Routes, Route } from 'react-router-dom';
import Category from './pages/Category';

import Home from './pages/Home';
import Product from './pages/Product';
import Purchase from './pages/FinalizePurchase';
import PageDevelopment from './pages/PageDevelopment';

export default () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:departament/:slug" element={<Product/>}/>
      <Route path="/:category" element={<Category/>}/>
      <Route path="/purchase" element={<Purchase/>}/>
      <Route path="/development" element={<PageDevelopment/>}/> 
    </Routes>
  );
}