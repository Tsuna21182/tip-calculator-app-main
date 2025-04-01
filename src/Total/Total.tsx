import Btn from "../components/Btn";

function Total() {
  return (
    <div className="bg-Green900 mt-10 rounded-lg p-5 flex flex-col">
      <div className="flex justify-between items-center mt-5">
        <div>
          <h3 className="text-White text-xl font-semibold">Tip Amount</h3>
          <p className="text-Grey400">/ person</p>
        </div>
        <>
          <p className="text-Green400 text-3xl font-bold">$4.27</p>
        </>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h3 className="text-White text-xl font-semibold">Total</h3>
          <p className="text-Grey400">/ person</p>
        </div>
        <>
          <p className="text-Green400 text-3xl font-bold">$32.79</p>
        </>
      </div>
      <Btn />
    </div>
  );
}

export default Total;
