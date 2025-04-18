import Button from "./button";
import { useContext } from "react";
import { ActiveContext } from "../context/ActiveContext";

export default function Card({ item }) {
  const { isActive, setIsActive } = useContext(ActiveContext);
  return (
    <div>
      <div className="relative">
        <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-3xl">
          <img
            src={item?.image?.desktop}
            alt="Product Image"
            className={`rounded-3xl w-full h-full object-cover transition duration-300 hover:scale-120`}
          />
        </div>
        <Button />

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
