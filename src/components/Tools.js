import Image from 'next/image';
import front from '../../public/front-end.png';
import back from '../../public/back-end.png';
import webDesign from '../../public/web-design.png';
import ellipseYellow from '../../public/ellipseYellow.png';
import vectorCyan from '../../public/vectorCyan.png';
import { IoLogoCss3, IoLogoAngular, IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap, FaSass, FaJira, FaReact, FaFigma, FaVuejs, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiJest, SiCypress, SiPostman, SiStorybook, SiTailwindcss, SiTypescript, SiJavascript, SiJquery, SiThreedotjs, SiCakephp, SiExpress, SiMysql, SiMongodb } from "react-icons/si";
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

export default function Tools() {

    const { t } = useTranslation();

    return (
        <section
            className='pt-18 mb-10 pb-20 px-8 md:px-20 relative scroll-mt-28 snap-start'
            id='tools'
        >
            <div className='ellipse-yellow absolute'>
                <Image
                    src={ellipseYellow}
                    alt={ t("ellipse_yellow") }
                    width="900"
                    height="900"
                    className="opacity-50"
                />
            </div>

            <div className='vector-cyan absolute'>
                <Image
                    src={vectorCyan}
                    alt={ t("cyan_vector") }
                    width="900"
                    height="900"
                    className="opacity-30"
                />
            </div>

            <div className='pb-3'>
                <h3 className='section-title uppercase'>{ t("section_header_tools") }</h3>
            </div>
            
            <div className='lg:flex lg:justify-between gap-6'>
                <motion.div  
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='tech-group glass'
                >
                    <Image src={front} width={100} height={100} alt={ t("frontend_dev_illustration") } />
                    <h6 className='tech-group-title uppercase'>{ t("tools_frontend") }</h6>
                    <div className='flex flex-col md:flex-row lg:flex-col md:flex-wrap md:gap-y-2 md:justify-center md:gap-8 lg:gap-2 pb-2'>
                        <div className="tech-subj"><IoLogoHtml5 className="text-xl"/><p className='tech-item'>HTML</p></div>
                        <div className="tech-subj"><IoLogoCss3 className="text-xl" /><p className='tech-item'>CSS</p></div>
                        <div className="tech-subj"><FaSass className="text-xl" /><p className='tech-item'>Sass</p></div>
                        <div className="tech-subj"><FaBootstrap className="text-xl" /><p className='tech-item'>Bootstrap</p></div>
                        <div className="tech-subj"><SiTailwindcss className="text-xl" /><p className='tech-item'>Tailwind</p></div>
                        <div className="tech-subj"><SiJavascript className="text-x" /><p className='tech-item'>JavaScript</p></div>
                        <div className="tech-subj"><SiTypescript className="text-x" /><p className='tech-item'>TypeScript</p></div>
                        <div className="tech-subj"><IoLogoAngular className="text-xl" /><p className='tech-item'>Angular</p></div>
                        <div className="tech-subj"><FaReact className="text-xl" /><p className='tech-item'>React</p></div>
                        <div className="tech-subj"><FaVuejs className="text-xl" /><p className='tech-item'>Vue</p></div>
                        <div className="tech-subj"><SiJquery className="text-x" /><p className='tech-item'>jQuery</p></div>
                        <div className="tech-subj"><SiThreedotjs className="text-x" /><p className='tech-item'>Three.js</p></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, ease: "easeOut", duration: 1 }}
                    className='tech-group glass'
                >
                    <Image src={back} width={100} height={100} alt={ t("backend_dev_illustration") } />
                    <h6 className='tech-group-title uppercase'>{ t("tools_backend") }</h6>
                    <div className='flex flex-col md:flex-row lg:flex-col md:flex-wrap md:gap-y-2 md:justify-center md:gap-8 lg:gap-2 pb-2'>
                        <div className="tech-subj"><FaPhp className="text-xl" /><p className='tech-item'>PHP</p></div>
                        <div className="tech-subj"><SiCakephp className="text-l" /><p className='tech-item'>CakePHP</p></div>
                        <div className="tech-subj"><FaNodeJs className="text-xl" /><p className='tech-item'>Node.js</p></div>
                        <div className="tech-subj"><SiExpress className="text-xl" /><p className='tech-item'>Express.js</p></div>
                        <div className="tech-subj"><SiMysql className="text-xl" /><p className='tech-item'>MySQL</p></div>
                        <div className="tech-subj"><SiMongodb className="text-xl" /><p className='tech-item'>MongoDB</p></div>
                    </div>
                </motion.div>

                <motion.div      
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, ease: "easeOut", duration: 1 }}
                    className='tech-group glass'
                >
                    <Image src={webDesign} width={90} height={90} className="pt-1" alt={ t("web_dev_illustration") } />
                    <h6 className='tech-group-title uppercase'>{ t("tools_others") }</h6>
                    <div className='flex flex-col md:flex-row lg:flex-col md:flex-wrap md:gap-y-2 md:justify-center md:gap-8 lg:gap-2 pb-2'>
                        <div className="tech-subj"><SiJest className="text-x" /><p className='tech-item'>Jest</p></div>
                        <div className="tech-subj"><SiCypress className="text-x" /><p className='tech-item'>Cypress</p></div>
                        <div className="tech-subj"><SiPostman className="text-x" /><p className='tech-item'>Postman</p></div>
                        <div className="tech-subj"><FaGitAlt className="text-xl" /><p className='tech-item'>Git</p></div>
                        <div className="tech-subj"><FaGithub className="text-x" /><p className='tech-item'>GitHub</p></div>
                        <div className="tech-subj"><FaGitlab className="text-x" /><p className='tech-item'>GitLab</p></div>
                        <div className="tech-subj"><SiStorybook className="text-x" /><p className='tech-item'>Storybook</p></div>
                        <div className="tech-subj"><FaFigma className="text-x" /><p className='tech-item'>Figma</p></div>
                        <div className="tech-subj"><FaJira className="text-x" /><p className='tech-item'>JIRA</p></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
