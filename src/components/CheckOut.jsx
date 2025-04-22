export default function CheckOut() {
  return (
    <div className="flex fixed inset-0 items-center justify-center bg-[var(--overlay-black)]">
      <div className=" bg-white rounded-lg p-10">
        <img src="/images/icon-order-confirmed.svg" alt="confirmation icon" />
        <h1 className="font-bold text-2xl">Order Confirmed</h1>
        <p className="text-[14px] text-[var(--dark-red)]">
          We hope you enjoy your food!
        </p>
      </div>
    </div>
  );
}
