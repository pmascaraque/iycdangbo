import data from "/data/about";

export default function Extra() {
  let elements = [];
  data.association.forEach((item) => {
    let list = [];
    item.list.forEach((listItem) => {
      list.push(<p>{listItem}</p>);
    });
    elements.push(
      <div className="mx-2 pt-4">
        <h1 className="text-md md:text-lg font-display text-maroon font-bold">{item.title}</h1>
        <div className="flex flex-col text-xs md:text font-body text-redy">{list}</div>
      </div>
    );
  });

  return (
    <div className="p-4 pb-10 border-t-8 border-maroon md:flex md:justify-around mf:flex-wrap lg:text-2xl lg:px-32 2xl:px-96 2xl:text-3xl">
      {elements}
    </div>
  );
}
