type BtnProps = {
  Reset: () => void;
  disabled: boolean;
};

function Btn({ Reset, disabled }: BtnProps) {
  return (
    <button
      className={` text-center mt-10 rounded-lg text-2xl text-Green900 font-bold uppercase p-3  transition-all duration-300 lg:mt-55  ${
        disabled
          ? "bg-Grey400 cursor-not-allowed"
          : "bg-Green400 hover:bg-Grey200 cursor-pointer"
      }`}
      onClick={Reset}
    >
      Reset
    </button>
  );
}

export default Btn;
