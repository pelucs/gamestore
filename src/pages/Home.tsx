import AddBagModal from "../components/AddBagModal";
import ButtonToTop from "../components/ButtonToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar"
import Warning from "../components/Warning";

export default () => {
  return(
    <>
      <ButtonToTop/>
      <Warning/>
      <AddBagModal/>
      <div className="w-full min-h-screen flex flex-col transition-all">
        <Header/>

        <main className="flex flex-1 justify-between">
          <Sidebar/>
          <Section/>
        </main>
        
        <Footer/>
      </div>
    </>
  );
}