import LinksCategory from "./LinksCategory";
import LinksMenu from "./LinksMenu";
import Search from "./Search";

export default () => {
  return(
    <aside className="hidden sm:block w-[70px] lg:w-[248px] min-h-screen p-4 lg:p-5 bg-gray-700 border-r 
    border-gray-600 transition-all">
      <Search/>
      
      <LinksMenu/>
      <LinksCategory/>
    </aside>
  );
}