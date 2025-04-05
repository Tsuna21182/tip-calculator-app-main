import Btn from "../components/Btn";

type useBillProps = {
  TotalAmount: number;
  TipAmount: number;
  Reset: () => void;
  disabled: boolean;
};

function Total({ TotalAmount, TipAmount, Reset, disabled }: useBillProps) {
  return (
    <div className="bg-Green900 mt-10 rounded-lg p-5 flex flex-col lg:size-[30rem]">
      <div className="flex justify-between items-center mt-5">
        <div>
          <h3 className="text-White text-xl lg:text-2xl font-semibold">
            Tip Amount
          </h3>
          <p className="text-Grey400 lg:text-xl">/ person</p>
        </div>
        <>
          <p className="text-Green400 text-3xl lg:text-5xl font-bold">
            ${TipAmount}
          </p>
        </>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h3 className="text-White text-xl lg:text-2xl font-semibold">
            Total
          </h3>
          <p className="text-Grey400 lg:text-xl">/ person</p>
        </div>
        <>
          <p className="text-Green400 text-3xl lg:text-5xl font-bold">
            ${TotalAmount.toFixed(2)}
          </p>
        </>
      </div>

      <Btn Reset={Reset} disabled={disabled} />
    </div>
  );
}

export default Total;
