import { useParams } from "react-router-dom";
import AddBagModal from "../components/AddBagModal";
import ButtonToTop from "../components/ButtonToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ProductSingle from "../components/ProductSingle";
import Sidebar from "../components/Sidebar"
import Warning from "../components/Warning";

export default () => {

  const { slug } = useParams<{slug: string}>();

  return(
    <>
      <ButtonToTop/>
      <Warning/>
      <AddBagModal/>
      <div className="w-full min-h-[100vh] flex flex-col transition-all">
        <Header/>

        <main className="flex flex-1 justify-between">
          <Sidebar/>
          {
            slug ? <ProductSingle productSlug={slug}/>
            : <Loading/>
          }
        </main>
        
        <Footer/>
      </div>
  </>
  );
}