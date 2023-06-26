import React from "react";
import { useState } from "react";
import { store, myStore } from "./redux/store";

import { Provider } from "react-redux";
import AllProduct from "./component/AllProduct";
import Carts from "./component/Carts";
import Nav from "./component/Nav";

function App() {
  const [product,setProduct] = useState(true);

  return (
    <Provider store={store}>
      <Nav product={()=>{setProduct(true)}} cart={()=>{setProduct(false)}}></Nav>
      {product?(<AllProduct></AllProduct>):(<Carts></Carts>)}
    </Provider>
  );
}

export default App;
