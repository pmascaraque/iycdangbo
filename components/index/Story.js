import data from "/data/story";

function Story() {
  return (
    <div>
      <div className="h-screen w-full relative font-medium border-t-8 border-maroon">
        <p className="absolute z-10 tiny:text-lg sm:text-2xl p-4 top-12 md:w-1/2 md:text-3xl md:top-72 md:left-12 lg:leading-normal lg:text-3xl lg:left-24 lg:top-48 2xl:text-5xl 2xl:leading-normal font-body">
          {data.secondText}
        </p>
        <img
          src={data.bgDoctorsImageURL}
          alt={data.bgDoctorsImageAlt}
          className="h-screen opacity-60 object-cover w-screen object-center"
        />
        <h1 className="hidden md:inline absolute bottom-12 right-12 text-6xl font-display">{data.cityName}</h1>
      </div>

      <div className="h-screen w-full relative font-medium border-t-8 border-maroon">
        <p className="absolute z-10 tiny:text-base sm:text-xl p-4 top-12 md:w-1/2 md:text-3xl md:top-48 md:left-12 lg:leading-normal lg:text-3xl lg:left-24 xl:top-40 lg:top-24 2xl:text-5xl 2xl:leading-normal font-body">
          {data.firstText}
        </p>
        <img
          className="absolute z-10 bottom-12 right-1/4 w-2/4 md:right-16 md:top-64 md:w-2/6 lg:w-3/12 "
          src={data.locationImageURL}
        />
        <img
          src={data.bgImageURL}
          alt={data.bgImageAlt}
          className="h-screen opacity-30 object-cover w-screen object-center"
        />
        <h1 className="hidden md:inline absolute bottom-12 right-12 text-6xl font-display">{data.cityName}</h1>
      </div>
    </div>
  );
}

export default Story;
