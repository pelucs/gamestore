import { Routes, Route } from 'react-router-dom';
import Category from './pages/Category';

import Home from './pages/Home';
import Purchase from './pages/FinalizePurchase';
import PageDevelopment from './pages/PageDevelopment';

export default () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:category" element={<Category/>}/>
      <Route path="/purchase" element={<Purchase/>}/>
      <Route path="/development" element={<PageDevelopment/>}/> 
    </Routes>
  );
}
