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
            className="relative scroll-mt-28 snap-start px-8 md:px-20"
        >
            <div>
                <h3 className='section-title uppercase'>{ t("section_header_my_work") }</h3>
            </div>

            <div className='flex flex-col gap-20 lg:gap-12 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                    <Image
                        src={kanbanVue}
                        alt="KanbanVue app screenshot."
                        className='glass-project hover-scale object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-8 pb-2'>
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
                    <p className='dark:text-white pt-2 cursor-default'>
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://kanban-vue-ruby.vercel.app/">KanbanVue</a>{ t("project_description_kanban_vue") }
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={jsCodeGamer}
                        alt="JsCodeGamer app screenshot."
                        className='glass-project hover-scale object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-8 pb-2'>
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
                    <p className='dark:text-white pt-2 cursor-default'>
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://jscodegamer.vercel.app">JSCODEGAMER </a>{ t("project_description_js_code_gamer") }
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={taskManager}
                        alt="Task Manager app screenshot."
                        className='glass-project hover-scale object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-8 pb-2'>
                        <span className='tech-used'>
                            React
                        </span>
                        <span className='tech-used'>
                            Bootstrap
                        </span>
                    </div>
                    <p className='dark:text-white pt-2 cursor-default'>
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/task-manager">Task Manager App</a>{ t("project_description_task_manager") }
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={birthdayPlanner}
                        alt="Birthday Planner app screenshot."
                        className='glass-project hover-scale object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-8 pb-2'>
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
                    <p className='dark:text-white pt-2 cursor-default'>
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/my-birthday">Birthday Planner</a>{ t("project_description_birthday_planner") }
                    </p>
                </div>
            </div>
        </section>
    )
}
