import { motion } from "framer-motion";
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

export default function Hero() {

    const { t } = useTranslation();

    return (
        <section
            id="top"
            className='flex justify-center items-center h-screen relative px-8 md:px-20'
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.6 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ ease: "easeOut", duration: 3 }} 
                className='glass cursor-default p-10 mt-12 lg:w-3/4'
            >
                <h2 className='py-2 gradient-text font-extrabold text-5xl md:text-6xl lg:text-7xl text-left'>{ t("hero_header") }</h2>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-teal-100 pt-5 text-left'>{ t("hero_subheader") }</h3>
                <div className='flex flex-col sm:flex-row items-center justify-start gap-7 mt-20'>
                    <a
                        className="btn z-10"
                        href="mailto:kushnir.ekaterina@gmail.com"
                    >
                        { t("btn_contact_me") }
                    </a>
                    <a
                        className="btn z-10"
                        href="https://github.com/katiaku/katiaku/blob/main/Ekaterina_Kushnir_CV_EN.pdf"
                        target="_blank"
                    >
                        { t("btn_resume") }
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
