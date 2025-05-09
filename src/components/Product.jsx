import { useEffect, useState } from "react";
import Card from "./Card";

export default function Product({
  handleAddtoCart,
  handleQuantityChange,
  total,
  setTotal,
  showModal,
  setShowModal,
}) {
  // create a state array to hold all fetch values
  const [data, setData] = useState([]);
  useEffect(function () {
    // create an async function to fetch json data
    async function fetchData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  });
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Desserts</h1>
      <ul className="grid grid-cols-3 gap-y-[2rem] gap-x-[3rem] mt-10 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {data.map((item, index) => (
          <li key={index}>
            <Card
              item={item}
              index={index}
              handleAddtoCart={handleAddtoCart}
              handleQuantityChange={handleQuantityChange}
              total={total}
              setTotal={setTotal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
