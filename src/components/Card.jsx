export default function Card({ item }) {
  console.log(item);
  return (
    <div>
      <div>
        <img src={item?.image?.desktop} alt="Product Image" />
        <small>{item.category}</small>
        <p>{item?.name}</p>
        <small>{item?.price}</small>
      </div>
    </div>
  );
}
