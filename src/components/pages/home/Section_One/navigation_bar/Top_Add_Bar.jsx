import { useState } from "react";
import { useTranslation } from "react-i18next";

const Top_Add_Bar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  const [confirmationDialogBox, setConfirmationDialogBox] = useState(false);
  const languages = [
    { id: "en", label: "English" },
    { id: "ur", label: "Urdu" },
    { id: "hi", label: "Hindi" },
    { id: "ma", label: "Marathi" },
  ];

  const CaptureSelectOptions = (event) => {
    const selectedLanguageCode = event.target.value;
    setSelectedLanguage(selectedLanguageCode);
    setConfirmationDialogBox(true);
    i18n.changeLanguage(selectedLanguageCode);
  };

  return (
    <>
      <div className="flex justify-between bg-black text-white p-1 text-sm max-w-none sm:max-w-991 md:max-w-767 lg:max-w-479">
        <p className="text-center m-auto font-thin sm:text-sm">
          {t("top-bar")}
          <span className="font-bold underline ml-2 ">{t("shop-now")}</span>
          {/* <span>{confirmationDialogBox && "Just For Implementation"}</span> */}
        </p>
        <div className="relative language_options flex items-center ">
          <span
            className={`text-red-500  ${
              confirmationDialogBox && selectedLanguage !== "en"
                ? "block"
                : "hidden"
            }`}
          >
            {confirmationDialogBox ? "Languages Implementation purposes" : null}
          </span>

          <select
            id="languageSelect"
            onChange={CaptureSelectOptions}
            value={selectedLanguage}
            className="bg-black text-white appearance-none border-none p-2 pr-8 focus:outline-none"
          >
            {languages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top_Add_Bar;
