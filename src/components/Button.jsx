export default function Button() {
  function handleOnMouse() {
    console.log("Mouse is over the button");
  }
  return (
    <div
      className="bg-white p-3 rounded-full border border-[var(--product-category-color)] w-40 absolute bottom-25 right-6 hover:bg-[var(--cart-red)] hover:text-white duration-300"
      onMouseEnter={handleOnMouse}
    >
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img src="/images/icon-add-to-cart.svg" alt="" />
        <small className="font-bold">Add to Cart</small>
      </div>
    </div>
  );
}
