import Image from 'next/image';
import taskManager from '../../public/taskManager.png';
import birthdayPlanner from '../../public/birthdayPlanner.png';
import jsCodeGamer from '../../public/jscodegamer_game.png';
import kanbanVue from '../../public/kanbanVue.png';

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative scroll-mt-28 snap-start px-10 md:px-20"
        >
            <div>
                <h3 className='section-title uppercase'>check out my favorite pieces</h3>
            </div>

            <div className='flex flex-col gap-14 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                    <Image
                        src={kanbanVue}
                        alt="KanbanVue app screenshot."
                        className='hover-scale rounded-3xl object-cover shadow-lg'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-6'>
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
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://kanban-vue-ruby.vercel.app/">KanbanVue</a> is a kanban board application for work management. Inspired by the principles of Agile methodologies, I wanted to build my own tool to easily visualize work and prioritize tickets. The user can customize columns and tickets and easily drag them around the board.
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={jsCodeGamer}
                        alt="Jscodegamer app screenshot."
                        className='hover-scale rounded-3xl object-cover shadow-lg'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-6'>
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
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://jscodegamer.vercel.app">JSCODEGAMER </a> facilitates learning programming by providing interactive lessons and practical challenges in JavaScript. Its space-inspired environment creates an educational and motivating experience for users who want to embark on their programming journey. The app includes 9 levels that unlock progressively based on the user&apos;s progress, along with diverse challenges and an integrated code editor.
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={taskManager}
                        alt="Task manager app screenshot."
                        className='hover-scale rounded-3xl object-cover shadow-lg'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-6'>
                        <span className='tech-used'>
                            React
                        </span>
                        <span className='tech-used'>
                            Bootstrap
                        </span>
                    </div>
                    <p className='dark:text-white pt-2 cursor-default'>
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/task-manager">Task Manager App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.
                    </p>
                </div>

                <div className='basis-1/3 flex-1'>
                    <Image
                        src={birthdayPlanner}
                        alt="Birthday planner app screenshot."
                        className='hover-scale rounded-3xl object-cover shadow-lg'
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className='flex gap-2 pt-6'>
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
                        <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/my-birthday">Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.
                    </p>
                </div>
            </div>
        </section>
    )
}
