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

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="px-8 md:px-20 mt-20 pt-4 flex flex-col items-center dark:text-gray-200">
            <a className="btn" href="#">
                {t('btn_back_to_top')}
            </a>
            <p className="mt-10 text-sm cursor-default">{t('footer_motto')}</p>
            <p className="text-sm cursor-default text-center">
                {t('footer_copy')}
            </p>
        </footer>
    )
}
