import Bill from "./Bill/Bill";

function App() {
  return (
    <>
      <main>
        <div className="mt-10 flex justify-center items-center">
          <img src="/images/logo.svg" alt="imagen logo" />
        </div>
        <section className="bg-White rounded-t-2xl p-5 mt-10">
          <Bill />
        </section>
      </main>
    </>
  );
}

export default App;
