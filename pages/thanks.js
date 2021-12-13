import React from "react";
import Layout from "/components/layout/Layout";
import data from "/data/thanks";
import Confetti from "react-confetti";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size";

function Thanks() {
  const [width, height] = useWindowSize();

  return (
    <Layout>
      <div className="h-screen w-full relative font-medium top-16 border-t-4 border-black">
        <div className="flex flex-col items-center md:mt-52 z-10 relative text-white md:h-screen">
          <h1 className="mt-6 text-4xl md:text-6xl">{data.title}</h1>
          <p className="text-center	mt-4 text-xl md:text-2xl px-2">{data.text}</p>
          <Link href="/">
            <a className="back-button z-10 relative mt-10">Volver</a>
          </Link>
        </div>
        <div className="absolute top-0 z-30">
          <Confetti
            width={width}
            height={height}
            opacity={0.6}
            recycle={true}
            numberOfPieces={150}
            initialVelocityY={10}
          />
        </div>
        <img
          src={data.imageURL}
          className="h-screen absolute z-0 top-0 overflow-y-hidden object-cover w-screen object-center"
        />
      </div>
    </Layout>
  );
}

export default Thanks;
