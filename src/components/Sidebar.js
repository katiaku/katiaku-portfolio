import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default function Sidebar() {

    const { t } = useTranslation();

    return (
        <nav className='md:hidden header-glass fixed h-full w-2/3 z-10 py-3 px-10 flex flex-col justify-center'>

            <ul className='flex flex-col items-start gap-10'>
                <li className='menu-item text-xl'>
                    <a className='uppercase' href="#about">
                        { t("header_about") }
                    </a>
                </li>
                <li className='menu-item text-xl'>
                    <a className='uppercase' href="#tools">
                        { t("header_tools") }
                    </a>
                </li>
                <li className='menu-item text-xl'>
                    <a className='uppercase' href="#projects">
                        { t("header_my_work") }
                    </a>
                </li>
                <li>
                    <a
                        aria-label="LinkedIn"
                        className="flex items-center gap-2 text-xl menu-item"
                        target="_blank"
                        href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"
                    >
                        <AiFillLinkedin />
                        <span className='uppercase font-semibold pt-1'>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        aria-label="GitHub"
                        className="flex items-center gap-2 text-xl menu-item"
                        target="_blank"
                        href="https://github.com/katiaku"
                    >
                        <AiFillGithub />
                        <span className='uppercase font-semibold pt-1'>GitHub</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
