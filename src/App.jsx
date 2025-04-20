import Cart from "./components/Cart";
import Product from "./components/Product";
import CounterProvider from "./context/CounterProvider";
import ActiveProvider from "./context/ActiveProvider";
import { useState } from "react";

const addCartDummyData = [];

function App() {
  // Lift state up to a common parent component
  const [cartItems, setCartItem] = useState(addCartDummyData);

  function handleAddtoCart(item) {
    setCartItem((cartItems) => [...cartItems, { ...item }]);
  }

  // function RemoveFromCart(item, index) {
  //   // const filtered = cartItems.filter((item, index) => index !== indexToRemove);
  //   setCartItem(filtered);
  // }

  return (
    <ActiveProvider>
      <CounterProvider>
        <div className="container mx-auto p-10">
          <div className="flex justify-between">
            <Product handleAddtoCart={handleAddtoCart} />
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </CounterProvider>
    </ActiveProvider>
  );
}

export default App;

/*
 2 main components
  * Cart components
  * Product components
    * Cards components
      *card components   
*/
