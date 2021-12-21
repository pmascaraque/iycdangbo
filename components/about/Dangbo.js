import useTranslation from "next-translate/useTranslation";

function Dangbo() {
  const { t } = useTranslation();

  return (
    <div className="md:h-screen lg:h-full">
      <div className="w-full mt-16 font-medium">
        <h1 className="pt-10 w-min text-4xl font-bold mx-auto font-display text-maroon">{t("about:dangbo.header")}</h1>
        <div className="p-4 font-body md:w-3/4 md:mx-auto">
          <p className="mb-4 tiny:text-base sm:text-xl p-4 top-12 md:text-2xl lg:leading-normal 2xl:text-3xl 2xl:leading-normal lg:px-24">
            {t("about:dangbo.firstParagraph")}
          </p>
          <p className="mb-4 tiny:text-base sm:text-xl p-4 top-12 md:text-2xl lg:leading-normal 2xl:text-3xl 2xl:leading-normal lg:px-24">
            {t("about:dangbo.secondParagraph")}
          </p>
        </div>
      </div>
      <span className="w-screen flex justify-content">
        <img
          src="https://ik.imagekit.io/300/0IyCDangboResources/d1dae451-a55e-41ea-a5b8-b99420310673_Gp-XPD7DvYK.png?updatedAt=1637599959485"
          class="hidden md:inline-flex h-48 w-48 mx-auto"
        />
      </span>
    </div>
  );
}

export default Dangbo;
