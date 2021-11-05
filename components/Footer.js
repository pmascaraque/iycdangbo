import React from "react";
import data from "/data/footer.js";

export default function Footer() {
  let socialList = [];
  data.forEach((element) => {
    let linksList = [];
    element.links.forEach((link) => {
      linksList.push(
        <a href={link.URL} target="_blank" className="hover:text-white py-1">
          {link.name}
        </a>
      );
    });
    socialList.push(
      <div className="mx-2 pt-4">
        <h1 className="text-md">{element.title}</h1>
        <div className="flex flex-col text-xs text-gray-200">{linksList}</div>
      </div>
    );
  });

  return (
    <div className="py-8 text-white flex justify-around flex-wrap lg:text-2xl lg:px-48 2xl:px-96 2xl:text-3xl">
      {socialList}
    </div>
  );
}
