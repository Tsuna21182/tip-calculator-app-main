function NumPerson() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <label className="text-Green900 font-semibold text-xl">
        Number of People
      </label>
      <input
        type="number"
        className="py-2 px-20 bg-Grey50 bg-[url(/images/icon-person.svg)] bg-no-repeat bg-[2rem] outline-0 rounded-lg"
        placeholder="Cuantas Personas"
      />
    </div>
  );
}

export default NumPerson;
