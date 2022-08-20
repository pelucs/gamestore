import Sidebar from '../components/Sidebar'
import { useParams } from "react-router-dom";
import ButtonToTop from "../components/ButtonToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListCategory from "../components/ListCategory";
import Loading from "../components/Loading";
import Warning from '../components/Warning';
import AddBagModal from '../components/AddBagModal';

export default () => {

  document.documentElement.scrollTop = 0;

  const { category } = useParams<{category: string}>();

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
            category ? <ListCategory categoryProducts={category}/>
            : <Loading/>
          }
        </main>
        
        <Footer/>
      </div>
  </>
  );
} 