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
];

export default function Cart() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(addCartDummyData);
  return (
    <div>
      <div className="bg-white rounded-2xl px-10 py-5">
        <h2 className="text-[var(--cart-red)] font-bold">Your Cart(0)</h2>
        {show ? (
          <div className="flex flex-col items-center justify-center text-center p-5">
            <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
            <p className="font-bold text-[var(--light-red)]">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <CartItems addCartDummyData={addCartDummyData} />
        )}
      </div>
    </div>
  );
}

function CartItems({ addCartDummyData }) {
  return (
    <>
      <ul className="w-[20vw]">
        {addCartDummyData.map((item) => (
          <div>
            <li
              key={item?.name}
              className="border-b-1 flex items-center justify-between border-[var(--product-category-color)] py-3"
            >
              <div>
                <p className="font-bold text-[#444]">{item?.name}</p>
                <div className="flex gap-3 text-[13px]">
                  <span className="text-[var(--cart-red)] font-bold">
                    {item?.quantity}x
                  </span>
                  <span className="text-[var(--product-category-color)]">
                    @${item?.price}
                  </span>
                </div>
              </div>
              <div className="border cursor-pointer border-[var(--product-category-color)] p-1 rounded-full">
                <img
                  src="/images/icon-remove-item.svg"
                  alt="Remove cart image"
                />
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center mt-3">
          <span className="text-[var(--product-category-color)]">
            Order Total
          </span>
          <span className="font-bold text-2xl">$46.50</span>
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
        <button className="bg-[var(--cart-red)] text-white w-full rounded-full py-3">
          Confirm Order
        </button>
      </div>
    </>
  );
}
