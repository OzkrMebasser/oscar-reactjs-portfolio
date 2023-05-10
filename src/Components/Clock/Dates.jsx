import { useTranslation } from "react-i18next";

import "../../pages/Home/Home.css";

function Dates() {
  const [t] = useTranslation("global");
  const dates = t("dates.getDate");

  const currDate = new Date().toLocaleDateString(`${dates}`, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <span className="dates">{t("dates.todayIs")} {currDate}</span>
    </>
  );
}

export default Dates;
