type useBillProps = {
  setPerson: React.Dispatch<React.SetStateAction<number>>;
  person: number;
};

function NumPerson({ setPerson, person }: useBillProps) {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <label className="text-Green900 font-semibold text-xl">
        Number of People
      </label>
      <input
        type="number"
        className="py-2 px-20 bg-Grey50 bg-[url(/images/icon-person.svg)] bg-no-repeat bg-[2rem] focus:outline-Green400 text-Green900 font-bold rounded-lg"
        placeholder="Cuantas Personas"
        value={person === 0 ? "" : person}
        onChange={(e) => setPerson(+e.target.value)}
      />
    </div>
  );
}

export default NumPerson;
