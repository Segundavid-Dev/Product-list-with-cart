export default function Image({ item, isBorderActive }) {
  return (
    <div
      className={`${
        isBorderActive && "border-[var(--cart-red)] border-2"
      } w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-3xl max-sm:w-full max-lg:w-full`}
    >
      <img
        src={item?.image?.desktop}
        alt="Product Image"
        className={
          "rounded-3xl w-full h-full object-cover transition duration-300 hover:scale-120"
        }
      />
    </div>
  );
}
