import Games from "./Games";

export default () => {
  return(
    <div className="mt-20 flex-1 flex flex-col">
      <h1 className="text-2xl font-medium text-gray-100">
        Jogos
      </h1>

      <Games/>
    </div>
  );
}