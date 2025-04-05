import Tip from "../Data/Tip";

type useBillProps = {
  selectedTip: number | null;
  handleTipSelect: (value: number) => void;
};

function Tips({ selectedTip, handleTipSelect }: useBillProps) {
  return (
    <div className="mt-10">
      <h2 className="text-Green900 font-semibold text-xl">Select Tip %</h2>
      <div className="grid grid-cols-2 gap-5 text-center mt-5 lg:grid-cols-3">
        {Tip.map((item, index) => (
          <button
            key={index}
            className={` p-5 rounded-lg  text-White text-2xl font-semibold transition-all duration-300 cursor-pointer ${
              selectedTip === item.value
                ? "bg-Green400"
                : "bg-Green900 hover:bg-Green400"
            }`}
            value={item.value}
            name="tip"
            onClick={() => handleTipSelect(item.value)}
          >
            {item.name}
          </button>
        ))}
        <input
          type="number"
          min="0"
          placeholder="Custom"
          className="p-5 bg-Grey50 font-bold text-2xl text-Green900 placeholder:text-Green900 focus:outline-Green400 rounded-lg"
          value={
            selectedTip !== null && !Tip.some((t) => t.value === selectedTip)
              ? selectedTip * 100
              : ""
          }
          onChange={(e) => handleTipSelect(+e.target.value / 100)}
        />
      </div>
    </div>
  );
}

export default Tips;
