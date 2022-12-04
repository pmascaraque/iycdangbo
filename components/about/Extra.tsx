import useTranslation from "next-translate/useTranslation";

export default function Extra() {
  const { t } = useTranslation();

  return (
    <div className="p-4 pb-10 border-t-8 border-maroon md:flex md:justify-around mf:flex-wrap lg:text-2xl lg:px-32 2xl:px-96 2xl:text-3xl">
      <div className="mx-2 pt-4">
        <h1 className="text-md md:text-lg font-display text-maroon font-bold">{t("about:extra.record.title")}</h1>
        <div className="flex flex-col text-xs md:text font-body text-redy">
          <p>{t("about:extra.record.id")}</p>
          <p>{t("about:extra.record.inscription")}</p>
          <p>{t("about:extra.record.national_number")}</p>
        </div>
      </div>
      <div className="mx-2 pt-4">
        <h1 className="text-md md:text-lg font-display text-maroon font-bold">{t("about:extra.contact.title")}</h1>
        <div className="flex flex-col text-xs md:text font-body text-redy">
          <p>{t("about:extra.contact.location")}</p>
          <p>{t("about:extra.contact.phone")}</p>
          <p>{t("about:extra.contact.email")}</p>
        </div>
      </div>
      <div className="mx-2 pt-4">
        <h1 className="text-md md:text-lg font-display text-maroon font-bold">
          {t("about:extra.board_directors.title")}
        </h1>
        <div className="flex flex-col text-xs md:text font-body text-redy">
          <p>{t("about:extra.board_directors.president")}</p>
          <p>{t("about:extra.board_directors.vide_president")}</p>
          <p>{t("about:extra.board_directors.secretary")}</p>
          <p>{t("about:extra.board_directors.treasurer")}</p>
        </div>
      </div>
    </div>
  );
}
