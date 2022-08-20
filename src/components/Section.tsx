import { Link } from "react-router-dom"
import { useGetProductsQuery } from "../graphql/generated"
import GameList from "./GameList"
import Loading from "./Loading"
import ProductList from "./ProductList"
import Banner from "./Banner"

export default () => {

  document.documentElement.scrollTop = 0;

  const { data } = useGetProductsQuery();

  if(!data){
    return <Loading/>
  }

  return(
    <div className="flex-1 p-5 pb-10">
      <Link 
        to="/teclado"
      >
        <div className="flex-1 h-[60vh] rounded bg-banner bg-center bg-cover">

        </div>
      </Link>

      <ProductList/>
      <Banner/>
      <GameList/>
    </div>
  );
}