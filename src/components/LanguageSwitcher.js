import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    return (
        <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="bg-transparent menu-item focus:outline-none"
            aria-label="Choose language: English or Spanish"
        >
            <option value="en">EN</option>
            <option value="es">ES</option>
        </select>
    )
}
