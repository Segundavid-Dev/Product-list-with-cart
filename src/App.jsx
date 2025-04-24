import Cart from "./components/Cart";
import Product from "./components/Product";
import CounterProvider from "./context/CounterProvider";
import ActiveProvider from "./context/ActiveProvider";
import CheckOut from "./components/CheckOut";
import { useState } from "react";

const addCartDummyData = [];

function App() {
  // Lift state up to a common parent component
  const [cartItems, setCartItem] = useState(addCartDummyData);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleQuantityChange(id, quantity) {
    setQuantities((prev) => ({
      // product1: 2, product2: 1
      ...prev,
      [id]: quantity,
    }));
  }

  function handleAddtoCart(item, index, value) {
    setCartItem((cartItems) => {
      // method to handle duplicate cartItem
      const exists = cartItems.some((cartItem) => cartItem.index === index);
      if (exists) {
        return cartItems.map((cartItem) =>
          cartItem.index === index
            ? { ...cartItem, value: value === 1 ? value + 1 : value }
            : cartItem
        );
      } //early return
      return [...cartItems, { ...item, index, value }];
    });
  }
  console.log(cartItems);

  function RemoveFromCart(item, indexToRemove) {
    const filtered = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItem(filtered);
  }

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function closeModal() {
    // reset all state back to initial state
    setShowModal(false);
    setCartItem(addCartDummyData);
    setQuantities({});
  }

  return (
    <ActiveProvider>
      <CounterProvider>
        <div className="container mx-auto p-10 relative">
          <div className="flex justify-between max-sm:flex-col max-lg:flex-col">
            <Product
              handleAddtoCart={handleAddtoCart}
              handleQuantityChange={handleQuantityChange}
              total={total}
              setTotal={setTotal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <Cart
              cartItems={cartItems}
              RemoveFromCart={RemoveFromCart}
              quantities={quantities}
              total={total}
              setTotal={setTotal}
              showModal={showModal}
              closeModal={closeModal}
              handleShowModal={handleShowModal}
              handleQuantityChange={handleQuantityChange}
            />
            {showModal && (
              <CheckOut closeModal={closeModal} cartItems={cartItems} />
            )}
          </div>
        </div>
      </CounterProvider>
    </ActiveProvider>
  );
}

export default App;
