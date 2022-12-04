import useTranslation from "next-translate/useTranslation";

function Association() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="w-full mt-16 font-bold border-t-8 border-maroon">
        <h1 className="pt-10 w-min text-4xl mx-auto font-display text-maroon">{t("about:association.header")}</h1>
        <div className="p-4 font-body md:w-3/4 md:mx-auto">
          <p className="mb-4 tiny:text-base sm:text-xl p-4 top-12 md:text-2xl lg:leading-normal 2xl:text-3xl 2xl:leading-normal lg:px-24">
            {t("about:dangbo.firstParagraph")}
          </p>
          <p className="mb-4 tiny:text-base sm:text-xl p-4 top-12 md:text-2xl lg:leading-normal 2xl:text-3xl 2xl:leading-normal lg:px-24">
            {t("about:dangbo.secondParagraph")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Association;
