import { useEffect, useState } from "react";
import Card from "./Card";

export default function Product() {
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
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Desserts</h1>
      <ul className="grid grid-cols-3 gap-y-[2rem] gap-x-[3rem] mt-10">
        {data.map((item) => (
          <li key={item.name}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
