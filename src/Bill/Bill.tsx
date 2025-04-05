type useBillProps = {
  setValor: React.Dispatch<React.SetStateAction<number>>;
  valor: number;
};

function Bill({ setValor, valor }: useBillProps) {
  return (
    <div className="flex flex-col gap-5">
      <label className="text-Green900 font-semibold text-xl">Bill</label>
      <input
        type="number"
        className="py-2 px-20 bg-Grey50 bg-[url(/images/icon-dollar.svg)] bg-no-repeat bg-[2rem] rounded-lg focus:outline-Green400 text-Green900 font-bold"
        placeholder="Introduce la cantidad"
        value={valor === 0 ? "" : valor}
        onChange={(e) => setValor(+e.target.value)}
      />
    </div>
  );
}

export default Bill;
