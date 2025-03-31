function Bill() {
  return (
    <div className="flex flex-col gap-5">
      <label className="text-Green900 font-semibold text-xl">Bill</label>
      <input
        type="number"
        className="py-2 px-20 bg-Grey50 bg-[url(/images/icon-dollar.svg)] bg-no-repeat bg-[2rem] outline-0 rounded-lg"
        placeholder="Introduce la cantidad"
      />
    </div>
  );
}

export default Bill;
