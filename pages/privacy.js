import data from "/data/about";
import Layout from "/components/layout/Layout";

function Privacy() {
  return (
    <Layout>
      <div>
        <div className="h-screen w-full relative font-medium top-16 border-t-8 border-black">
          <h1 className="hidden md:inline absolute top-8 right-20 text-6xl">PRIVACY</h1>
          <div className="absolute z-10 tiny:text-base sm:text-xl top-12 md:w-1/2 md:text-2xl md:top-12 lg:leading-normal lg:text-2xl lg:top-28 3xl:text-5xl 2xl:leading-normal">
            <p className="relative md:left-12 lg:left-24">
              <meta http-equiv="refresh" content="0; url=https://www.termsfeed.com/live/58a43746-7fd1-4d32-b514-f8ff2e46c3b7" />
            </p>
            <p className="relative md:left-12 lg:left-24">{data.text2}</p>
          </div>
          <img src={data.imageURL1} className="h-screen object-cover w-screen object-center" />
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
