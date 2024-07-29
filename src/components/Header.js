import { useState } from 'react'
import Image from 'next/image'
import logo from '../app/icon.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'
import { FiCodepen } from 'react-icons/fi'
import { Expand } from '@theme-toggles/react'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default function Header({
    toggleDarkMode,
    onHamburgerClick,
    isSidebarOpen,
}) {
    const { t } = useTranslation()

    const [isToggled, setToggle] = useState(true)

    return (
        <nav className="header-glass fixed w-full z-20 py-3 px-5 flex">
            <div className="flex justify-center items-center">
                <Image src={logo} alt={t('logo')} width={30} height={30} />
            </div>

            <ul className="hidden md:flex items-center w-full justify-evenly">
                <li className="menu-item">
                    <a className="uppercase" href="#about">
                        {t('header_about')}
                    </a>
                </li>
                <li className="menu-item">
                    <a className="uppercase" href="#tools">
                        {t('header_tools')}
                    </a>
                </li>
                <li className="menu-item">
                    <a className="uppercase" href="#projects">
                        {t('header_my_work')}
                    </a>
                </li>
            </ul>

            <ul className="flex items-center gap-6 ml-auto md:ml-0">
                <li className="hidden md:flex">
                    <a
                        aria-label="LinkedIn"
                        className="icon-link"
                        target="_blank"
                        href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"
                    >
                        <AiFillLinkedin />
                    </a>
                </li>
                <li className="hidden md:flex">
                    <a
                        aria-label="GitHub"
                        className="icon-link"
                        target="_blank"
                        href="https://github.com/katiaku"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="hidden md:flex">
                    <a
                        aria-label="Codepen"
                        className="icon-link"
                        target="_blank"
                        href="https://codepen.io/katiaku/pens/public"
                    >
                        <FiCodepen />
                    </a>
                </li>

                <li className="md:hidden">
                    <div
                        className="cursor-pointer icon-link"
                        onClick={onHamburgerClick}
                    >
                        {isSidebarOpen ? (
                            <FaRegWindowClose />
                        ) : (
                            <GiHamburgerMenu />
                        )}
                    </div>
                </li>

                <li className="flex justify-center">
                    <Expand
                        toggled={isToggled}
                        toggle={() => {
                            setToggle(!isToggled)
                            toggleDarkMode()
                        }}
                        className="cursor-pointer icon-link"
                    />
                </li>
            </ul>

            <div className="flex justify-center items-center ml-5 md:ml-4 md:pt-[1px]">
                <LanguageSwitcher />
            </div>
        </nav>
    )
}
