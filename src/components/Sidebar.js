import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FiCodepen } from 'react-icons/fi'
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

export default function Sidebar({ isOpen, onClose }) {
    const { t } = useTranslation()

    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="flex flex-col items-start gap-12">
                <li className="menu-item text-xl" onClick={onClose}>
                    <a className="uppercase" href="#about">
                        {t('header_about')}
                    </a>
                </li>
                <li className="menu-item text-xl" onClick={onClose}>
                    <a className="uppercase" href="#tools">
                        {t('header_tools')}
                    </a>
                </li>
                <li className="menu-item text-xl" onClick={onClose}>
                    <a className="uppercase" href="#projects">
                        {t('header_my_work')}
                    </a>
                </li>
                <li className="menu-item text-xl" onClick={onClose}>
                    <a className="uppercase" href="#contact">
                        {t('header_contact')}
                    </a>
                </li>
                <li onClick={onClose}>
                    <a
                        aria-label="LinkedIn"
                        className="flex items-center gap-2 text-xl menu-item"
                        target="_blank"
                        href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"
                    >
                        <AiFillLinkedin />
                        <span className="uppercase font-semibold pt-1">
                            LinkedIn
                        </span>
                    </a>
                </li>
                <li onClick={onClose}>
                    <a
                        aria-label="GitHub"
                        className="flex items-center gap-2 text-xl menu-item"
                        target="_blank"
                        href="https://github.com/katiaku"
                    >
                        <AiFillGithub />
                        <span className="uppercase font-semibold pt-1">
                            GitHub
                        </span>
                    </a>
                </li>
                <li onClick={onClose}>
                    <a
                        aria-label="Codepen"
                        className="flex items-center gap-2 text-xl menu-item"
                        target="_blank"
                        href="https://codepen.io/katiaku/pens/public"
                    >
                        <FiCodepen />
                        <span className="uppercase font-semibold pt-1">
                            Codepen
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
