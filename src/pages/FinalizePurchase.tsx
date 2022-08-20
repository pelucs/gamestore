import { useContext } from "react";
import { BagContext } from "../context/BagContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import ProductsPurchase from "../components/ProductsPurchase";


export default () => {

  const { bag } = useContext(BagContext);

  return(
    <>
      <Header/>

      <div className="flex-1 min-h-screen flex flex-col sm:flex-row justify-between">
        <ProductsPurchase/>
        <CardDetail/>
      </div>

      <Footer/>
    </>
  );
}