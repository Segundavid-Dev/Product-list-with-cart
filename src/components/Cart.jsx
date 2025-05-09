import { useState, useContext, useEffect, useRef } from "react";
import { ActiveContext } from "../context/ActiveContext";

export default function Cart({
  cartItems,
  RemoveFromCart,
  quantities,
  total,
  setTotal,
  showModal,
  closeModal,
  handleShowModal,
  handleQuantityChange,
}) {
  const { isActive, setIsActive } = useContext(ActiveContext);

  return (
    <div>
      <div className="bg-white rounded-2xl px-10 py-5 max-sm:w-full max-sm:mt-10 max-sm:px-7 max-lg:w-[70%] mx-auto max-lg:mt-10">
        <h2 className="text-[var(--cart-red)] font-bold">
          {isActive ? (
            <p>Your Cart ({cartItems.length})</p>
          ) : (
            <p>Your Cart (0)</p>
          )}
        </h2>
        {!isActive ? (
          <EmptyCart />
        ) : cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItems
            cartItems={cartItems}
            RemoveFromCart={RemoveFromCart}
            quantities={quantities}
            total={total}
            setTotal={setTotal}
            handleShowModal={handleShowModal}
            handleQuantityChange={handleQuantityChange}
          />
        )}
      </div>
    </div>
  );
}

function CartItems({
  cartItems,
  RemoveFromCart,
  quantities,
  total,
  setTotal,
  handleShowModal,
  showModal,
  handleQuantityChange,
}) {
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => {
      const quantity = quantities[item.index] || 1;
      return acc + item.price * quantity;
    }, 0);
    setTotal(newTotal);
  }, [cartItems, quantities, setTotal]);
  return (
    <>
      <ul className="w-[20vw] max-sm:w-full max-lg:w-full">
        {cartItems.map((item, indexToRemove) => {
          const quantity = quantities[item.index] || 1;
          const calculatedPrice = quantity * item?.price;
          return (
            <div key={indexToRemove}>
              <li className="border-b-1 flex items-center justify-between border-[var(--product-category-color)] py-3">
                <div>
                  <p className="text-[#444]">{item?.name}</p>
                  <div className="flex gap-3 text-[13px]">
                    <span className="text-[var(--cart-red)] font-bold">
                      {quantity}
                    </span>
                    <span className="text-[var(--product-category-color)]">
                      @${item?.price}
                    </span>
                    <span className="text-[var(--dark-red)]">
                      ${calculatedPrice}
                    </span>
                  </div>
                </div>
                <div
                  className="border cursor-pointer border-[var(--product-category-color)] p-1 rounded-full"
                  onClick={() => RemoveFromCart(item, indexToRemove)}
                >
                  <img
                    src="/images/icon-remove-item.svg"
                    alt="Remove cart image"
                  />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center mt-3">
          <span className="text-[var(--product-category-color)]">
            Order Total
          </span>
          <span className="font-bold text-2xl">${total}</span>
        </div>
        <div className="text-sm flex gap-2 items-center justify-center bg-gray-100 p-4 rounded-lg max-sm:text-[13px]">
          <div>
            <img
              src="/images/icon-carbon-neutral.svg"
              alt="carbon neutral img"
            />
          </div>
          <p>
            This is a <span className="font-bold">carbon-neutral </span>delivery
          </p>
        </div>
        <button
          className="bg-[var(--cart-red)] text-white w-full rounded-full py-3 cursor-pointer"
          onClick={handleShowModal}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-5">
      <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
      <p className="font-bold text-[var(--light-red)]">
        Your added items will appear here
      </p>
    </div>
  );
}
