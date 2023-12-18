import { useState } from "react";

const Top_Add_Bar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [confirmationDialogBox, setConfirmationDialogBox] = useState(false);
  const languages = [
    { id: "en", label: "English" },
    { id: "es", label: "Spanish" },
    { id: "fr", label: "French" },
  ];

  const CaptureSelectOptions = (event) => {
    setSelectedLanguage(event.target.value);
    setConfirmationDialogBox(true);
  };

  return (
    <>
      <div className="flex justify-between bg-black text-white p-1 text-sm">
        <p className="text-center m-auto font-thin">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-bold underline ml-2">ShopNow</span>
        </p>
        <div className="relative language_options">
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
