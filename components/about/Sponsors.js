import sponsors from "/data/sponsors";
import data from "/data/about";
import React from "react";

function Sponsors() {
  let linksList = [];
  sponsors.forEach((element) => {
    linksList.push(
      <a href={element.link} target="_blank" className="inline-block m-4">
        <img src={element.imageURL} width="120" />
      </a>
    );
  });
  return (
    <div className="pb-8 w-full font-medium top-16 border-t-8 border-maroon">
      <h1 className="pt-10 w-min text-4xl mx-auto">{data.headers[2]}</h1>
      <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-items-center">{linksList}</div>
    </div>
  );
}

export default Sponsors;
