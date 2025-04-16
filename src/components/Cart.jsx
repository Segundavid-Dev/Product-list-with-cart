export default function Cart() {
  return (
    <div>
      <div className="bg-white rounded-2xl px-10 py-5">
        <h2 className="text-[var(--cart-red)] font-bold">Your Cart(0)</h2>
        <div className="flex flex-col items-center justify-center text-center p-5">
          <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
          <p className="font-bold text-[var(--light-red)]">
            Your added items will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
