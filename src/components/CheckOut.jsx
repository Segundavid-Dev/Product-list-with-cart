import { useEffect, useState } from "react";

export default function CheckOut({ closeModal, cartItems }) {
  return (
    <div className="flex fixed inset-0 items-center justify-center bg-[var(--overlay-black)]">
      <div className=" bg-white p-10 w-[30vw] max-h-[80vh] overflow-auto max-sm:w-[90vw]">
        <img src="/images/icon-order-confirmed.svg" alt="confirmation icon" />
        <h1 className="font-bold text-2xl">Order Confirmed</h1>
        <p className="text-[14px] text-[var(--dark-red)]">
          We hope you enjoy your food!
        </p>
        <CartSummary cartItems={cartItems} />
        <button
          className="outline-none border-0 bg-[var(--cart-red)] text-white w-full rounded-full py-3 cursor-pointer mt-10"
          onClick={closeModal}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

function CartSummary({ cartItems }) {
  const [total, setTotal] = useState(0);
  useEffect(
    function () {
      const newTotal = cartItems.reduce((acc, item) => {
        const quantity = item.value;
        return acc + item.price * quantity;
      }, 0);
      setTotal(newTotal);
    },
    [cartItems]
  );
  return (
    <>
      <div>
        <ul className="bg-[var(--checkout-color)]">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="border-b-1 border-gray-300 px-5 py-3 text-[14px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <img
                    src={item.image.mobile}
                    alt=""
                    className="w-[60px] rounded-lg h-[50px] object-cover"
                  />
                  <div>
                    <p className="font-bold ">{item.name}</p>
                    <span className="text-[var(--cart-red)] font-bold mr-4">
                      {item.value}x
                    </span>
                    <span className="text-[var(--light-red)]">
                      @${item.price}
                    </span>
                  </div>
                </div>

                <div>${item.value * item.price}</div>
              </div>
            </li>
          ))}
        </ul>
        <li className="list-none flex items-center justify-between border-gray-300 px-5 py-5 bg-[var(--checkout-color)]">
          <div>Order Total</div>
          <div>
            <p className="font-bold">${total}</p>
          </div>
        </li>
      </div>
    </>
  );
}
