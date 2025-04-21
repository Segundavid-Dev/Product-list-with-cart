import { useState } from "react";
import Button from "./button";
import Image from "./Image";

export default function Card({
  item,
  index,
  handleAddtoCart,
  handleQuantityChange,
}) {
  const [isBorderActive, setIsBorderActive] = useState(false);

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
        />

        <div className="pt-10">
          <small className="text-[var(--product-category-color)]">
            {item.category}
          </small>
          <p className="font-bold">{item?.name}</p>
          <small className="text-[var(--cart-red)] font-bold">
            ${item?.price}
          </small>
        </div>
      </div>
    </div>
  );
}
