import Image from 'next/image';
import { AiFillCheckCircle } from "react-icons/ai";
import ellipsePurple from '../../public/ellipsePurple.png';
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

export default function About() {

    const { t } = useTranslation();

    return (
        <section
            className='mt-10 mb-20 pb-20 px-8 md:px-20 relative cursor-default scroll-mt-28 snap-start'
            id='about'
        >
            <div className='ellipse-purple absolute'>
                <Image
                    src={ellipsePurple}
                    alt="Decorative purple ellipse."
                    width="1000"
                    height="1000"
                    className="opacity-30"
                />
            </div>

            <div className='pb-2 mb-10'>
                <h3 className='section-title uppercase'>{ t("section_header_about") }</h3>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ ease: "easeOut", duration: 3 }} 
                className='glass flex flex-col lg:flex-row p-10 gap-10'
            >
                <div className={`lg:w-1/3 text-left leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                    <div className='flex pb-2 items-start gap-4'>
                    <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                    <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>{ t("about_attention_to_detail_header") }</h6>
                    </div>
                    <p>{ t("about_attention_to_detail_content") }</p>
                </div>

                <div className={`lg:w-1/3 text-left text-md leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                    <div className='flex pb-2 items-start gap-4'>
                    <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                    <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>{ t("about_innovative_problem_solving_header") }</h6>
                    </div>
                    <p>{ t("about_innovative_problem_solving_content") }</p>
                </div>

                <div className={`lg:w-1/3 text-left text-md leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                    <div className='flex pb-2 items-start gap-4'>
                    <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                    <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>{ t("about_adaptability_header") }</h6>
                    </div>
                    <p>{ t("about_adaptability_content") }</p>
                </div>
            </motion.div>
        </section>
    )
}
