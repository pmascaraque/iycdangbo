import React from "react";
import Link from "next/link";
import data from "../data/header";
export default function Header() {
  return (
    <div className="h-16 absolute top-0 z-10 w-full px-2 flex justify-between md:place-items-center p-2 md:justify-between">
      <a className="flex place-items-center pt-4" href="/">
        <img src={data.logoURL} className="w-28 md:ml-2" />
      </a>
      <button className="inline-flex items-center bg-gray-50 bg-opacity-30 justify-center p-2 rounded-md hover:text-white hover:bg-gray-200 focus:outline-none md:hidden">
        <img src={data.menuIconURL} alt="Menu" className="w-8" />
      </button>
      <div className="hidden text-white text-md md:inline mr-4">
        <a href="about" className="hover:bg-gray-50 hover:bg-opacity-30 p-3 mr-2 w-30">
          {data.buttons.about_us}
        </a>
        <a href="news" className="hover:bg-gray-50 hover:bg-opacity-30 p-3 mr-2 w-25">
          {data.buttons.news}
        </a>
        <a href="donate" className="hover:bg-gray-50 hover:bg-opacity-30 p-3 mr-2 w-25">
          {data.buttons.colaborate}
        </a>
      </div>
    </div>
  );
}
