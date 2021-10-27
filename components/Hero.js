import data from "/data/hero";

function Hero() {
  return (
    <div className="h-screen w-full">
      <h1 className="absolute text-white z-10 text-4xl md:text-6xl md:pl-12 lg:text-9xl text-center top-1/2 w-4/6">
        <span className="font-semibold">{data.boldWord}</span> {data.text}
      </h1>
      <img src={data.imageURL} alt={data.imageAlt} className="absolute w-screen h-screen object-cover object-center" />
    </div>
  );
}

export default Hero;
