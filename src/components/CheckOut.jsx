export default function CheckOut({ closeModal }) {
  return (
    <div className="flex fixed inset-0 items-center justify-center bg-[var(--overlay-black)]">
      <div className=" bg-white rounded-lg p-7">
        <img src="/images/icon-order-confirmed.svg" alt="confirmation icon" />
        <h1 className="font-bold text-2xl">Order Confirmed</h1>
        <p className="text-[14px] text-[var(--dark-red)]">
          We hope you enjoy your food!
        </p>
        <button
          className="outline-none border-0 bg-[var(--cart-red)] text-white w-full rounded-full py-3 cursor-pointer mt-10"
          onClick={closeModal}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
