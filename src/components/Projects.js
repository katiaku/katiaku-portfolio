import Image from 'next/image'
import taskManager from '../../public/TaskManager_screen.png'
import birthdayPlanner from '../../public/BirthdayPlanner_screen.png'
import jsCodeGamer from '../../public/JsCodeGamer_screen.png'
import kanbanVue from '../../public/KanbanVue_screen.png'
import bookShelve from '../../public/BookShelve_screen.png'
import calmMate from '../../public/CalmMate.png'
import helpHub from '../../public/HelpHub.png'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

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

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section
            id="projects"
            className="scroll-mt-28 snap-start py-20 mb-20 px-8 md:px-20"
        >
            <div>
                <h3 className="section-title uppercase">
                    {t('section_header_my_work')}
                </h3>
            </div>

            <div className="flex flex-col items-center md:gap-10 lg:gap-32 py-14 lg:py-20">
                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={bookShelve}
                            alt={t('book_shelve_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-20 lg:mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    BookShelve{' '}
                                </span>
                                {t('project_description_book_shelve')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">React</span>
                                <span className="tech-used">TypeScript</span>
                                <span className="tech-used">Tailwind CSS</span>
                                <span className="tech-used">Express</span>
                                <span className="tech-used">MySQL</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_book_shelve_1')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/bookstore"
                            >
                                <FaGithub />
                            </a>
                            <a
                                aria-label={t('aria_label_book_shelve_2')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7211679313782308864/"
                            >
                                <FaPlay />
                            </a>
                            <a
                                aria-label={t('aria_label_book_shelve_3')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://bookshelve-two.vercel.app/"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={kanbanVue}
                            alt={t('kanban_vue_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-20 lg:mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    KanbanVue{' '}
                                </span>
                                {t('project_description_kanban_vue')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">Nuxt3</span>
                                <span className="tech-used">TypeScript</span>
                                <span className="tech-used">Tailwind CSS</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_kanban_vue_1')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/kanban-vue"
                            >
                                <FaGithub />
                            </a>
                            <a
                                aria-label={t('aria_label_kanban_vue_2')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7194297394845335554/"
                            >
                                <FaPlay />
                            </a>
                            <a
                                aria-label={t('aria_label_kanban_vue_3')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://kanban-vue-ruby.vercel.app"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={jsCodeGamer}
                            alt={t('js_code_gamer_vue_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-20 lg:mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    JSCodeGamer{' '}
                                </span>
                                {t('project_description_js_code_gamer')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">Angular</span>
                                <span className="tech-used">Express.js</span>
                                <span className="tech-used">MySQL</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_js_code_gamer_1')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/js_code_gamer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                aria-label={t('aria_label_js_code_gamer_2')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://www.loom.com/share/cc5bf9b206104f21807e8880e24d04fd?sid=d4bf0933-0423-47b3-ac8d-82ef959aae15"
                            >
                                <FaPlay />
                            </a>
                            <a
                                aria-label={t('aria_label_js_code_gamer_3')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://jscodegamer.vercel.app"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={taskManager}
                            alt={t('task_manager_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
                    <div className="mb-20 lg:mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    Task Manager
                                </span>
                                {t('project_description_task_manager')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">React</span>
                                <span className="tech-used">Bootstrap</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_task_manager')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/task-manager"
                            >
                                <FaGithub />
                            </a>
                            {/* <a
                                aria-label="Task Manager app demo"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a> */}
                            {/* <a
                                aria-label="Task Manager app page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={birthdayPlanner}
                            alt={t('birthday_planner_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    Birthday Planner
                                </span>
                                {t('project_description_birthday_planner')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">CakePHP</span>
                                <span className="tech-used">MySQL</span>
                                <span className="tech-used">Bootstrap</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_birthday_planner')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/my-birthday"
                            >
                                <FaGithub />
                            </a>
                            {/* <a
                                aria-label="Birthday Planner app demo"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a> */}
                            {/* <a
                                aria-label="Birthday Planner app page"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaExternalLinkAlt />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={calmMate}
                            alt={t('calm_mate_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    CalmMate
                                </span>
                                {t('project_description_calm_mate')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">React Native</span>
                                <span className="tech-used">Expo</span>
                                <span className="tech-used">TypeScript</span>
                                <span className="tech-used">NativeWind</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_calm_mate')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/calm-mate"
                            >
                                <FaGithub />
                            </a>
                            {/* <a
                                aria-label="Calm Mate app demo"
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="lg:relative lg:w-[880px] flex lg:block flex-col gap-2 md:gap-8">
                    <div className="image-glass overflow-hidden hover:z-10 mb-4 md:mb-0 lg:w-[480px] lg:absolute lg:right-0 lg:top-8">
                        <Image
                            src={helpHub}
                            alt={t('helphub_screenshot')}
                            className="object-cover hover-scale dark:opacity-80"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>

                    <div className="mb-0 glass p-8 lg:w-[480px] flex gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6">
                            <p className="dark:text-white pt-2 cursor-default">
                                <span className="text-slate-800 dark:text-blue-400 font-bold uppercase text-2xl mr-1">
                                    HelpHub
                                </span>
                                {t('project_description_helphub')}
                            </p>

                            <div className="flex gap-2">
                                <span className="tech-used">React Native</span>
                                <span className="tech-used">Expo</span>
                                <span className="tech-used">NativeWind</span>
                                <span className="tech-used">Socket.io</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                aria-label={t('aria_label_helphub_1')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="https://github.com/katiaku/GT-Helphub-iOs"
                            >
                                <FaGithub />
                            </a>
                            <a
                                aria-label={t('aria_label_helphub_2')}
                                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-800 hover:text-purple-700 dark:hover:text-blue-400 transition-all duration-300"
                                target="_blank"
                                href="">
                                <FaPlay />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
