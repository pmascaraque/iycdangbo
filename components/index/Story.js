import useTranslation from "next-translate/useTranslation";

function Story() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-screen w-full relative font-medium border-t-8 border-maroon">
        <p className="absolute z-10 tiny:text-lg sm:text-2xl p-4 top-12 md:w-1/2 md:text-3xl md:top-72 md:left-12 lg:leading-normal lg:text-3xl lg:left-24 lg:top-48 2xl:text-5xl 2xl:leading-normal font-body">
          {t("story:secondText")}
        </p>
        <img
          src="https://ik.imagekit.io/300/0IyCDangboResources/Cirujanos_JS-39_pKLh_-17J.jpg?updatedAt=1636127145202"
          alt="Doctors working"
          className="h-screen opacity-60 object-cover w-screen object-center"
        />
        <h1 className="hidden md:inline absolute bottom-12 right-12 text-6xl font-display">{t("story:cityName")}</h1>
      </div>

      <div className="h-screen w-full relative font-medium border-t-8 border-maroon">
        <p className="absolute z-10 tiny:text-base sm:text-xl p-4 top-12 md:w-1/2 md:text-3xl md:top-48 md:left-12 lg:leading-normal lg:text-3xl lg:left-24 xl:top-40 2xl:top-32 lg:top-24 2xl:text-5xl 2xl:leading-normal font-body">
          {t("story:firstText")}
        </p>
        <img
          className="absolute z-10 bottom-12 right-1/4 w-2/4 md:right-16 md:top-64 md:w-2/6 lg:w-3/12 "
          src="https://ik.imagekit.io/300/0IyCDangboResources/d1dae451-a55e-41ea-a5b8-b99420310673_Gp-XPD7DvYK.png?updatedAt=1637599959485"
        />
        <img
          src="https://i.guim.co.uk/img/media/7f319bf65c7229ea6c17380e2bb89ff493a03998/0_548_8216_4929/master/8216.jpg?width=620&quality=85&auto=format&fit=max&s=f3060161b73b50f26eef6dbfa3af2c53"
          alt="Town of Africa"
          className="h-screen opacity-30 object-cover w-screen object-center"
        />
        <h1 className="hidden md:inline absolute bottom-12 right-12 text-6xl font-display">{t("story:cityName")}</h1>
      </div>
    </div>
  );
}

export default Story;
