import useTranslation from "next-translate/useTranslation";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-full relative">
      <h1 className="absolute text-white z-10 text-5xl md:text-6xl md:pl-12 lg:text-8xl md:w-3/6 text-left bottom-14 left-4 w-4/6 font-display">
        <span className="font-semibold">{t("hero:dangbo")}</span> {t("hero:text")}
      </h1>
      <img
        src={t("hero:imageURL")}
        alt={t("hero:imageAlt")}
        className="absolute h-screen w-screen object-cover object-center"
      />
    </div>
  );
}

export default Hero;
