import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BagContextProvider } from "./context/BagContext";
import { useGetProductsQuery } from "./graphql/generated";

export default () => {
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <BagContextProvider>
          <Router/>
        </BagContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}