import Image from 'next/image';
import taskManager from '../../public/taskManager.png';
import birthdayPlanner from '../../public/birthdayPlanner.png';
import jsCodeGamer from '../../public/jscodegamer_game.png';
import kanbanVue from '../../public/kanbanVue.png';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function Projects() {

    const { t } = useTranslation();

    return (
        <section
            id="projects"
            className="relative scroll-mt-28 snap-start pt-20 mb-20 px-8 md:px-20"
        >
            <div>
                <h3 className='section-title uppercase'>{ t("section_header_my_work") }</h3>
            </div>

            <div className='flex flex-col md:gap-32 py-14'>
                <div className='relative lg:h-[470px]'>
                    <div className='opacity-60 mb-4 md:mb-0 glass p-6 lg:p-10 md:w-2/3 md:absolute md:right-0 md:top-8 hover-scale'>
                        <Image
                            src={kanbanVue}
                            alt={ t("kanban_vue_screenshot") }
                            className='object-cover'
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className='mb-20 md:mb-0 glass p-6 lg:p-10 md:w-3/5 lg:w-1/2 flex gap-6 lg:gap-10 items-center'>
                        <div className='flex flex-col gap-6'>
                            <p className='dark:text-white pt-2 cursor-default'>
                                <a className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-2" target="_blank" href="https://kanban-vue-ruby.vercel.app/">KanbanVue</a>{ t("project_description_kanban_vue") }
                            </p>

                            <div className='flex gap-2'>
                                <span className='tech-used'>
                                    Nuxt3
                                </span>
                                <span className='tech-used'>
                                    TypeScript
                                </span>
                                <span className='tech-used'>
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-8'>
                            <a
                                aria-label="KanbanVue app GitHub repository"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaGithub />
                            </a>
                            <a
                                aria-label="KanbanVue app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a>
                            <a
                                aria-label="KanbanVue app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative lg:h-[470px]'>
                    <div className='opacity-60 mb-4 md:mb-0 glass p-6 lg:p-10 md:w-2/3 md:absolute md:right-0 md:top-8 hover-scale'>
                        <Image
                            src={jsCodeGamer}
                            alt={ t("js_code_gamer_vue_screenshot") }
                            className='object-cover'
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
    
                    <div className='mb-20 md:mb-0 glass p-6 lg:p-10 md:w-3/5 lg:w-1/2 flex gap-6 lg:gap-10 items-center'>
                        <div className='flex flex-col gap-6'>
                            <p className='dark:text-white pt-2 cursor-default'>
                                <a className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-2" target="_blank" href="https://jscodegamer.vercel.app">JSCODEGAMER </a>{ t("project_description_js_code_gamer") }
                            </p>

                            <div className='flex gap-2'>
                                <span className='tech-used'>
                                    Angular
                                </span>
                                <span className='tech-used'>
                                    Express.js
                                </span>
                                <span className='tech-used'>
                                    MySQL
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-8'>
                            <a
                                aria-label="JSCodeGamer app GitHub repository"
                                className="text-2xl lg:text-3xl text-slate-600 md:text-white dark:text-slate-800 md:dark:text-white  hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaGithub />
                            </a>
                            <a
                                aria-label="JSCodeGamer app web page"
                                className="text-2xl lg:text-3xl text-slate-600 md:text-white dark:text-slate-800 md:dark:text-white  hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a>
                            <a
                                aria-label="JSCodeGamer app web page"
                                className="text-2xl lg:text-3xl text-slate-600 md:text-white dark:text-slate-800 md:dark:text-white  hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative lg:h-[470px]'>
                    <div className='opacity-60 mb-4 md:mb-0 glass p-6 lg:p-10 md:w-2/3 md:absolute md:right-0 md:top-8 hover-scale'>
                        <Image
                            src={taskManager}
                            alt={ t("task_manager_screenshot") }
                            className='mb-4 md:mb-0 object-cover'
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
    
                    <div className='mb-20 md:mb-0 glass p-6 lg:p-10 md:w-3/5 lg:w-1/2 flex gap-6 lg:gap-10 items-center'>
                        <div className='flex flex-col gap-6'>
                            <p className='dark:text-white pt-2 cursor-default'>
                                <a className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-2" target="_blank" href="https://github.com/katiaku/task-manager">Task Manager</a>{ t("project_description_task_manager") }
                            </p>

                            <div className='flex gap-2'>
                                <span className='tech-used'>
                                    React
                                </span>
                                <span className='tech-used'>
                                    Bootstrap
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-8'>
                            <a
                                aria-label="Task Manager app GitHub repository"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaGithub />
                            </a>
                            <a
                                aria-label="Task Manager app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a>
                            <a
                                aria-label="Task Manager app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative lg:h-[470px]'>
                    <div className='opacity-60 mb-4 md:mb-0 glass p-6 lg:p-10 md:w-2/3 md:absolute md:right-0 md:top-8 hover-scale'>
                        <Image
                            src={birthdayPlanner}
                            alt={ t("birthday_planner_screenshot") }
                            className='object-cover'
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
    
                    <div className='glass p-6 lg:p-10 md:w-3/5 lg:w-1/2 flex gap-6 lg:gap-10 items-center'>
                        <div className='flex flex-col gap-6'>
                            <p className='dark:text-white pt-2 cursor-default'>
                                <a className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-2" target="_blank" href="https://github.com/katiaku/my-birthday">Birthday Planner</a>{ t("project_description_birthday_planner") }
                            </p>

                            <div className='flex gap-2'>
                                <span className='tech-used'>
                                    CakePHP
                                </span>
                                <span className='tech-used'>
                                    MySQL
                                </span>
                                <span className='tech-used'>
                                    Bootstrap
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-8'>
                            <a
                                aria-label="Birthday Planner app GitHub repository"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaGithub />
                            </a>
                            <a
                                aria-label="Birthday Planner app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a>
                            <a
                                aria-label="Birthday Planner app web page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
