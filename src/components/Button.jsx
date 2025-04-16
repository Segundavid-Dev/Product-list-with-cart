export default function Button() {
  return (
    <div className="bg-white p-3 rounded-full border border-[var(--product-category-color)] w-40 absolute bottom-15 right-6">
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img src="/images/icon-add-to-cart.svg" alt="" />
        <small className="font-bold">Add to Cart</small>
      </div>
    </div>
  );
}
