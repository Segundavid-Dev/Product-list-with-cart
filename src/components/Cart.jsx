import { useState, useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";

export default function Cart({
  cartItems,
  RemoveFromCart,
  quantities,
  total,
  setTotal,
}) {
  const { isActive, setIsActive } = useContext(ActiveContext);

  return (
    <div>
      <div className="bg-white rounded-2xl px-10 py-5">
        <h2 className="text-[var(--cart-red)] font-bold">
          {isActive ? (
            <p>Your Cart ({cartItems.length})</p>
          ) : (
            <p>Your Cart (0)</p>
          )}
        </h2>
        {!isActive ? (
          <div className="flex flex-col items-center justify-center text-center p-5">
            <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
            <p className="font-bold text-[var(--light-red)]">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <CartItems
            cartItems={cartItems}
            RemoveFromCart={RemoveFromCart}
            quantities={quantities}
            total={total}
            setTotal={setTotal}
          />
        )}
      </div>
    </div>
  );
}

function CartItems({ cartItems, RemoveFromCart, quantities, total, setTotal }) {
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => {
      const quantity = quantities[item.index] || 1;
      return acc + item.price * quantity;
    }, 0);
    setTotal(newTotal);
  }, [cartItems, quantities, setTotal]);
  return (
    <>
      <ul className="w-[20vw]">
        {cartItems.map((item, indexToRemove) => {
          const quantity = quantities[item.index] || 1;
          const calculatedPrice = quantity * item?.price;
          return (
            <div key={indexToRemove}>
              <li className="border-b-1 flex items-center justify-between border-[var(--product-category-color)] py-3">
                <div>
                  <p className="font-bold text-[#444]">{item?.name}</p>
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
          <span className="font-bold text-2xl">{total}</span>
        </div>
        <div className="text-sm flex gap-2 items-center justify-center bg-gray-100 p-4 rounded-lg">
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
        <button className="bg-[var(--cart-red)] text-white w-full rounded-full py-3 cursor-pointer">
          Confirm Order
        </button>
      </div>
    </>
  );
}
