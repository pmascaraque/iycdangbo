import data from "/data/about";

function Association() {
  let paragraphs = [];
  data.iyc.map((item) => {
    paragraphs.push(
      <p className="mb-4 tiny:text-base sm:text-xl p-4 top-12 md:text-2xl lg:leading-normal 2xl:text-3xl 2xl:leading-normal lg:px-24">
        {item}
      </p>
    );
  });

  return (
    <div className="">
      <div className="w-full mt-16 font-medium border-t-8 border-maroon">
        <h1 className="pt-10 w-min text-4xl mx-auto">{data.headers[1]}</h1>
        <div className="p-4 w-4/6">{paragraphs}</div>
      </div>
    </div>
  );
}

export default Association;
