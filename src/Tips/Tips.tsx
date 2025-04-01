import Tip from "../Data/Tip";

function Tips() {
  return (
    <div className="mt-10">
      <h2 className="text-Green900 font-semibold text-xl">Select Tip %</h2>
      <div className="grid grid-cols-2 gap-5 text-center mt-5">
        {Tip.map((index) => (
          <button className="bg-Green900 p-5 rounded-lg hover:bg-Green400 text-White text-2xl font-semibold transition-all duration-300 cursor-pointer">
            {index.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tips;
