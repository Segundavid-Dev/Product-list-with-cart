import { useState } from "react";
import Button from "./button";
import Image from "./Image";

export default function Card({ item }) {
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
        />

        <div className="pt-10">
          <small className="text-[var(--product-category-color)] font-semibold">
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
