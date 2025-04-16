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
      <h1 className="text-4xl font-extrabold">Desserts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <Card />
          </li>
        ))}
      </ul>
    </div>
  );
}
