import { useState, useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";

export default function Button({
  showBorder,
  handleAddtoCart,
  index,
  item,
  handleQuantityChange,
  total,
  setTotal,
  showModal,
  setShowModal,
}) {
  const [isClick, setIsClick] = useState(false);
  const { isActive, setIsActive } = useContext(ActiveContext);

  const [value, setValue] = useState(1);

  useEffect(
    function () {
      if (!showModal) {
        setIsClick(false);
        setIsActive(false);
        setValue(1);
      }
    },
    [showModal, setIsActive]
  );

  function DecrementCartValue() {
    if (value === 1) return; // early return
    const newValue = value - 1;
    setValue(newValue);
    handleQuantityChange(index, newValue);
    console.log(index, newValue);
    console.log(total);
  }

  function IncrementCartValue() {
    const newValue = value + 1;
    setValue(newValue);
    handleQuantityChange(index, newValue);
    console.log(index, value);
    console.log(total);
  }

  // Desktop hover functionality
  function handleClick() {
    setIsClick(true);
    setIsActive(true);
  }

  return (
    <div
      onClick={() => {
        handleClick();
        showBorder();
        handleAddtoCart(item, index, value);
      }}
      className="select-none cursor-pointer"
    >
      <div
        className={`rounded-full p-3  border border-[var(--product-category-color)] hover:border-[var(--cart-red)] w-40 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
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
              onClick={() => {
                IncrementCartValue();
              }}
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
