import DropDown from "@/assets/icons/Drop Down.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languageFlags: { [key: string]: string } = {
    English: "🇬🇧",
    Русский: "🇷🇺",
  };

  return (
    <div className="relative flex gap-4 my-auto text-sm font-semibold whitespace-nowrap text-stone-500">
      <div className="flex items-center justify-center gap-2 transition ease-in hover:text-stone-700">
        <button onClick={toggleDropdown} className="flex items-center gap-2">
          <span>{languageFlags[selectedLanguage]}</span>
          {selectedLanguage}
        </button>
        <DropDown onClick={toggleDropdown} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-10 left-0 bg-white border border-gray-300 shadow-md rounded-md"
            >
              <ul>
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageSelect("English")}
                >
                  <span>🇬🇧</span>
                  English
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageSelect("Русский")}
                >
                  <span>🇷🇺</span>
                  Русский
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSelector;