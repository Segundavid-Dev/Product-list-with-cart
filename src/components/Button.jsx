import { useState } from "react";

export default function Button() {
  const [isHover, setIsHover] = useState(false);

  function handleOnMouseEnter() {
    setIsHover(!isHover);
  }

  function handleOnMouseLeave() {
    setIsHover(false);
  }
  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div
        className={`rounded-full p-3  border border-[var(--product-category-color)] w-40 absolute bottom-25 right-6 cursor-pointer ${
          isHover ? "bg-[var(--cart-red)] text-white border-none" : "bg-white"
        } `}
      >
        {isHover ? (
          <div className="flex items-center justify-around cursor-pointer">
            <div className="border border-white py-2 px-1 rounded-full">
              <img src="/images/icon-decrement-quantity.svg" alt="" />
            </div>
            <small className="font-bold">1</small>
            <div className="border border-white p-1 rounded-full ">
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
