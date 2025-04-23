import { useEffect, useState } from "react";
import Button from "./Button";
import Image from "./Image";

export default function Card({
  item,
  index,
  handleAddtoCart,
  handleQuantityChange,
  total,
  setTotal,
  showModal,
  setShowModal,
}) {
  const [isBorderActive, setIsBorderActive] = useState(false);

  useEffect(
    function () {
      if (!showModal) {
        setIsBorderActive(false);
      }
    },
    [showModal]
  );

  function showBorder() {
    setIsBorderActive(true);
  }

  return (
    <div>
      <div className="relative">
        <Image item={item} isBorderActive={isBorderActive} />
        <Button
          showBorder={showBorder}
          isBorderActive={isBorderActive}
          setIsBorderActive={setIsBorderActive}
          item={item}
          handleAddtoCart={handleAddtoCart}
          index={index}
          handleQuantityChange={handleQuantityChange}
          total={total}
          setTotal={setTotal}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        <div className="pt-10">
          <small className="text-[var(--product-category-color)]">
            {item.category}
          </small>
          <div className="max-sm:flex items-center justify-between">
            <p>{item?.name}</p>
            <small className="text-[var(--cart-red)] font-bold">
              ${item?.price}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
