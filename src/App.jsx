import Cart from "./components/Cart";
import Product from "./components/Product";
import CounterProvider from "./context/CounterProvider";
import ActiveProvider from "./context/ActiveProvider";
import { useState } from "react";

const addCartDummyData = [];

function App() {
  // Lift state up to a common parent component
  const [cartItems, setCartItem] = useState(addCartDummyData);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  function handleQuantityChange(id, quantity) {
    setQuantities((prev) => ({
      // product1: 2, product2: 1
      ...prev,
      [id]: quantity,
    }));
  }

  function handleAddtoCart(item, index) {
    setCartItem((cartItems) => {
      // method to handle duplicate cartItem
      const exists = cartItems.some((cartItem) => cartItem.index === index);
      if (exists) return cartItems; //early return
      return [...cartItems, { ...item, index }];
    });
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
              handleQuantityChange={handleQuantityChange}
              total={total}
              setTotal={setTotal}
            />
            <Cart
              cartItems={cartItems}
              RemoveFromCart={RemoveFromCart}
              quantities={quantities}
              total={total}
              setTotal={setTotal}
            />
          </div>
        </div>
      </CounterProvider>
    </ActiveProvider>
  );
}

export default App;
