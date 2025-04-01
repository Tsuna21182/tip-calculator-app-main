import Bill from "./Bill/Bill";
import Tips from "./Tips/Tips";
import NumPerson from "./NumPerson/NumPerson";
import Total from "./Total/Total";

function App() {
  return (
    <>
      <main>
        <div className="mt-10 flex justify-center items-center">
          <img src="/images/logo.svg" alt="imagen logo" />
        </div>
        <section className="bg-White rounded-t-2xl p-8 mt-10">
          <Bill />
          <Tips />
          <NumPerson />
          <Total />
        </section>
      </main>
    </>
  );
}

export default App;
