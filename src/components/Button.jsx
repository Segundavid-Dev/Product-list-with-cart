import { useState, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Button() {
  const [isHover, setIsHover] = useState(false);
  const { count, setCount } = useContext(CounterContext);

  // Desktop hover functionality
  function handleOnMouseEnter() {
    setIsHover(!isHover);
  }

  function handleOnMouseLeave() {
    setIsHover(false);
  }

  // Mobile click functionality
  function handleOnTouchStart() {
    setIsHover(true);
  }

  function handleOnTouchEnd() {
    setIsHover(false);
  }

  function handleAddtoCart() {
    const newValue = count + 1;
    setCount(newValue);
    console.log(newValue);
  }

  function handleRemoveFromCart() {
    const newValue = count - 1;
    setCount(newValue);
    console.log(newValue);
  }

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onTouchEnd={handleOnTouchEnd}
      onTouchStart={handleOnTouchStart}
      className="select-none"
    >
      <div
        className={`rounded-full p-3  border border-[var(--product-category-color)] w-40 absolute bottom-25 right-6 cursor-pointer ${
          isHover ? "bg-[var(--cart-red)] text-white border-none" : "bg-white"
        } `}
      >
        {isHover ? (
          <div className="flex items-center justify-around cursor-pointer">
            <div className="border border-white py-2 px-1 rounded-full">
              <img
                src="/images/icon-decrement-quantity.svg"
                alt=""
                onClick={handleRemoveFromCart}
              />
            </div>
            <small className="font-bold">1</small>
            <div className="border border-white p-1 rounded-full ">
              <img
                src="/images/icon-increment-quantity.svg"
                alt="increment-cart-icon"
                onClick={handleAddtoCart}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/images/icon-add-to-cart.svg" alt="Add-to-cart image" />
            <small className="font-bold">Add to Cart</small>
          </div>
        )}
      </div>
    </div>
  );
}
