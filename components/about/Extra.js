import data from "/data/about";

function Extra() {
  const mapText = (data) => (
    <div>
      {data.map((element) => (
        <p>{element}</p>
      ))}
    </div>
  );

  return (
    <div className="pb-40 w-full relative font-medium top-16">
      <h1 className="hidden md:inline text-4xl">{data.boldWord4}</h1>
      <div className="md:grid grid-cols-3 place-items-center">
        <div className="">{mapText(data.text5)}</div>
        <div className="">{mapText(data.text6)}</div>
        <div className="">{mapText(data.text7)}</div>
      </div>
    </div>
  );
}

export default Extra;
