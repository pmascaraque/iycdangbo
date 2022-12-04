import sponsors from "../../data/sponsors";
import React from "react";
import useTranslation from "next-translate/useTranslation";

function Sponsors() {
  const { t } = useTranslation();
  let linksList = [];
  sponsors.forEach((element) => {
    linksList.push(
      <a href={element.link} target="_blank" className="inline-block m-4">
        <img src={element.imageURL} width="120" />
      </a>
    );
  });
  return (
    <div className="pb-8 w-full font-medium top-16 border-t-8 border-maroon">
      <h1 className="pt-10 w-min text-4xl mx-auto font-display text-maroon">{t("about:sponsors.header")}</h1>
      <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-items-center">{linksList}</div>
    </div>
  );
}

export default Sponsors;
