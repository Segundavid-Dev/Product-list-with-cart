import { useState, useContext } from "react";
import { ActiveContext } from "../context/ActiveContext";

export default function Button({ showBorder, handleAddtoCart, index, item }) {
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState(1);
  const { isActive, setIsActive } = useContext(ActiveContext);

  // Desktop hover functionality
  function handleClick() {
    setIsClick(true);
    setIsActive(true);
  }

  function DecrementCartValue() {
    if (value === 1) return; // early return
    setValue(value - 1);
  }

  function IncrementCartValue() {
    setValue(value + 1);
  }

  return (
    <div
      onClick={() => {
        handleClick();
        showBorder();
        handleAddtoCart(item);
      }}
      className="select-none cursor-pointer"
    >
      <div
        className={`rounded-full p-3  border border-[var(--product-category-color)] hover:border-[var(--cart-red)] w-40 absolute bottom-25 right-6 ${
          isClick ? "bg-[var(--cart-red)] text-white border-none" : "bg-white"
        } `}
      >
        {isClick ? (
          <div className="flex items-center justify-around cursor-pointer">
            <div
              className="border border-white py-2 px-1 rounded-full"
              onClick={DecrementCartValue}
            >
              <img src="/images/icon-decrement-quantity.svg" alt="" />
            </div>
            <small className="font-bold">{value}</small>
            <div
              className="border border-white p-1 rounded-full "
              onClick={IncrementCartValue}
            >
              <img
                src="/images/icon-increment-quantity.svg"
                alt="increment-cart-icon"
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
