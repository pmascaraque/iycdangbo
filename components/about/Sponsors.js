import data from "/data/sponsors";
import data2 from "/data/about";
import React from "react";

function Sponsors() {
  let linksList = [];
  data.forEach((element) => {
    linksList.push(
      <a href={element.link} target="_blank" className="inline-block m-4">
        <img src={element.imageURL} width="120" />
      </a>
    );
  });
  return (
    <div className="pb-20 w-full relative font-medium top-16 border-t-8 border-black">
      <h1 className="relative top-8 left-1/3 text-6xl">{data2.boldWord3}</h1>
      <div className="relative top-16 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-items-center">{linksList}</div>
    </div>
  );
}

export default Sponsors;
