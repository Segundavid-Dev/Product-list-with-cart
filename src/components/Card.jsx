export default function Card({ item }) {
  console.log(item);
  return (
    <div>
      <div>
        <img
          src={item?.image?.desktop}
          alt="Product Image"
          className="w-[200px] rounded-3xl"
        />
        <small className="text-[var(--product-category-color)] font-semibold">
          {item.category}
        </small>
        <p className="font-bold">{item?.name}</p>
        <small className="text-[var(--cart-red)] font-bold">
          ${item?.price}
        </small>
      </div>
    </div>
  );
}
