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

  function RemoveFromCart(item, indexToRemove) {
    const filtered = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItem(filtered);
  }

  return (
    <ActiveProvider>
      <CounterProvider>
        <div className="container mx-auto p-10">
          <div className="flex justify-between">
            <Product
              handleAddtoCart={handleAddtoCart}
              RemoveFromCart={RemoveFromCart}
            />
            <Cart cartItems={cartItems} RemoveFromCart={RemoveFromCart} />
          </div>
        </div>
      </CounterProvider>
    </ActiveProvider>
  );
}

export default App;
