import data from "/data/about";

function Extra() {
  return (
    <div className="pb-40 w-full relative font-medium top-16">
      <h1 className="hidden md:inline top-8 left-20 text-4xl">{data.boldWord4}</h1>
      <p>{data.text5}</p>
      <p>{data.text6}</p>
      <p>{data.text7}</p>
    </div>
  );
}

export default Extra;
