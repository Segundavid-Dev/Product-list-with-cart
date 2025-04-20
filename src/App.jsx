import Cart from "./components/Cart";
import Product from "./components/Product";
import CounterProvider from "./context/CounterProvider";
import ActiveProvider from "./context/ActiveProvider";
import { useState } from "react";

const addCartDummyData = [
  {
    name: "Classic TIramisu",
    quantity: 1,
    price: 5.5,
  },
  {
    name: "Vanilla Bean Creme Brulee",
    quantity: 4,
    price: 7.0,
  },
  {
    name: "Vanilla Panna Cotta",
    quantity: 2,
    price: 6.5,
  },
  {
    name: "Poundo and Egusi",
    quantity: 10,
    price: 3,
  },
];

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
