import Bill from "./Bill/Bill";
import Tips from "./Tips/Tips";
import NumPerson from "./NumPerson/NumPerson";
import Total from "./Total/Total";
import useBill from "./Hooks/useBill";

function App() {
  const {
    TotalAmount,
    setValor,
    TipAmount,
    selectedTip,
    setPerson,
    Reset,
    isResetDisabled,
    person,
    valor,
    handleTipSelect,
  } = useBill();

  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <div className="mt-10 ">
          <img src="/images/logo.svg" alt="imagen logo" />
        </div>
        <section className="bg-White rounded-t-2xl md:rounded-lg p-8 mt-10 md:flex md:justify-center md:items-center md:gap-5 md:m-10 lg:p-5">
          <div className="lg:w-md">
            <Bill setValor={setValor} valor={valor} />
            <Tips selectedTip={selectedTip} handleTipSelect={handleTipSelect} />
            <NumPerson setPerson={setPerson} person={person} />
          </div>
          <div>
            <Total
              TotalAmount={TotalAmount}
              TipAmount={TipAmount}
              Reset={Reset}
              disabled={isResetDisabled}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
