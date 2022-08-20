import Products from "./Products";

export default () => {
  return(
    <div className="mt-10 flex-1 flex flex-col">
      <h1 className="text-2xl font-medium text-gray-100">
        Nossos produtos
      </h1>

      <Products/>
    </div>
  );
}