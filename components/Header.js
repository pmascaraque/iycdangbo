import React from 'react';
import Link from 'next/link';
import data from '../data/header';
export default function Header() {
    return (
        <div className="h-16 fixed top-0 z-10 shadow-md bg-white w-screen flex justify-between md:place-items-center p-2 md:justify-between">
            <a className="flex place-items-center" href="#">
                <img src={data.logoURL} className="w-28 md:ml-2 " />
            </a>
            <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-200 focus:outline-none md:hidden">
                <img src={data.menuIconURL} alt="Menu" className="w-8" />
            </button>
            <div className="hidden text-sm md:inline mr-4 text-gray-700">
                <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-30">
                    {data.buttons.home}
                </a>
                <a href="#aboutus" className="hover:bg-gray-100 p-3 mr-2 w-25">
                    {data.buttons.about_us}
                </a>
                <a href="#team" className="hover:bg-gray-100 p-3 mr-2 w-25">
                    {data.buttons.colaborate}
                </a>
            </div>
        </div>
    );
}
