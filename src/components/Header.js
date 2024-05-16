import { useState } from 'react';
import Image from 'next/image';
import logo from '../app/icon.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Expand } from "@theme-toggles/react";
import LanguageSwitcher from './LanguageSwitcher';
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

export default function Header({ darkMode, toggleDarkMode }) {

    const { t } = useTranslation();

    const [isToggled, setToggle] = useState(true);

    return (
        <nav className='header-glass fixed w-full z-10 py-1 px-3'>
            <ul className='flex items-center gap-6 md:gap-8'>
                <li>
                    <Image
                        src={logo}
                        alt={ t("logo") }
                        width={30}
                        height={30}
                        className='m-3'
                    />
                </li>

                <ul className='flex justify-center items-center gap-6 md:gap-10 ml-auto'>
                    <li className='menu-item'>
                        <a className='uppercase' href="#about">
                            { t("header_about") }
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a className='uppercase' href="#tools">
                            { t("header_tools") }
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a className='uppercase' href="#projects">
                            { t("header_my_work") }
                        </a>
                    </li>
                </ul>

                <ul className='flex justify-center items-center gap-4 md:gap-6 mr-3'>
                    <li>
                        <a
                            className="icon-link"
                            target="_blank"
                            href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            className="icon-link"
                            target="_blank"
                            href="https://github.com/katiaku">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <Expand  
                            toggled={isToggled} 
                            toggle={() => {
                                setToggle(!isToggled);
                                toggleDarkMode();
                            }} 
                            className='mt-2 cursor-pointer icon-link'
                        />
                    </li>

                    <LanguageSwitcher />
                </ul>
            </ul>
        </nav>
    );
};
