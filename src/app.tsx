import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/product' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
