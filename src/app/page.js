"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillCheckCircle } from "react-icons/ai";
import { IoLogoCss3, IoLogoAngular, IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap, FaSass, FaJira, FaReact, FaFigma, FaVuejs, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiJest, SiCypress, SiPostman, SiStorybook, SiTailwindcss, SiTypescript, SiJavascript, SiJquery, SiThreedotjs, SiCakephp, SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import Image from 'next/image';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import jscodegamer from '../../public/jscodegamer_game.png';
import kanbanVue from '../../public/kanbanVue.png';
import logo from './icon.png';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { motion } from "framer-motion";
import Cursor from '@/components/Cursor';
import background from '../../public/bg.png';
import front from '../../public/front-end.png';
import back from '../../public/backend.png';
import others from '../../public/web-design.png';
import ellipse1 from '../../public/Ellipse 1.png';
import ellipse2 from '../../public/Ellipse 2.png';
import ellipse3 from '../../public/Ellipse 3.png';
import vector1 from '../../public/Vector 1.png';
import vector2 from '../../public/Vector 2.png';
import vector3 from '../../public/Vector 3.png';

export default function Home() {

  const [isToggled, setToggle] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Web Developer Portfolio</title>
        <meta name="description" content="Web developer portfolio, modern web development with React, Angular and Vue." />
        <link rel="icon" href="icon.png" />
      </Head>

      <main
        id="main"
        className='relative bg-slate-100 pb-10 dark:bg-gray-900 transition-all duration-300 w-screen'
      >

        <div id="background" className='absolute w-full z-0'>
          <Image
            src={background}
            alt="Futuristic background of purple, yellow and cyan colored blocks"
            className='opacity-90'
          />
        </div>
        
        {/* <Cursor /> */}

        <section
          id="top"
          className='flex flex-col h-screen pb-20 mb-[10rem] md:mb-[2rem]'
        >
          <motion.nav
            initial={{ x: "1000vw" }}
            animate={{ x: "0" }}
            transition={{ duration: 1.5 }}
            className='header-glass py-1 px-3 lg:mb-[150px] md:mb-[130px] mb-[100px]'
          >
            <ul className='flex items-center gap-6 md:gap-8 lg:gap-8'>
              <li>
                <Image
                  src={logo}
                  alt="personal EK logo"
                  width={30}
                  height={30}
                  className='m-3'
                />
              </li>

              <ul className='flex justify-center items-center gap-6 md:gap-10 lg:gap-10 ml-auto'>
                <li className='menu-item text-slate-800 dark:text-teal-100'>
                  <a className='uppercase' href="#about">
                    about
                  </a>
                </li>
                <li className='menu-item text-slate-800 dark:text-teal-100'>
                  <a className='uppercase' href="#tools">
                    tools
                  </a>
                </li>
                <li className='menu-item text-slate-800 dark:text-teal-100'>
                  <a className='uppercase' href="#projects">
                    my work
                  </a>
                </li>
              </ul>

              <ul className='flex justify-center items-center items-right gap-4 md:gap-6 lg:gap-6 mr-3'>
                <li className='shake'>
                  <a
                    className="icon-link text-slate-800 dark:text-teal-100"
                    target="_blank"
                    href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova">
                      <AiFillLinkedin />
                  </a></li>
                <li className='shake'>
                  <a
                    className="icon-link text-slate-800 dark:text-teal-100"
                    target="_blank"
                    href="https://github.com/katiaku">
                      <AiFillGithub />
                  </a></li>
                <li className='shake'>
                  <Expand  
                    toggled={isToggled} 
                    toggle={() => {
                      setToggle(!isToggled);
                      setDarkMode(!darkMode);
                    }} 
                    className='mt-2 cursor-pointer icon-link text-slate-800 dark:text-teal-100'
                  />
                </li>
              </ul>
            </ul>
          </motion.nav>

          <motion.div 
            initial={{ x: "-100vw", y: "-100vw" }} 
            animate={{ x: "0", y: "0" }} 
            transition={{ duration: 1.2 }} 
            className='glass place-self-center p-10 mx-20 lg:w-3/5 cursor-default'
          >
            <h2 className=' py-2 gradient-text font-extrabold text-6xl sm:text-7xl text-left'>Crafting seamless digital experiences</h2>
            <h3 className='text-3xl font-bold text-slate-800 dark:text-teal-100 pt-5 text-left'>Web Development | React | Angular | Vue</h3>
            <div className='flex flex-col sm:flex-row items-center justify-start gap-7 mt-20'>
              <a
                className="btn z-10"
                href="mailto:kushnir.ekaterina@gmail.com"
              >
                Contact Me
              </a>
              <a
                className="btn z-10"
                href="https://github.com/katiaku/katiaku/blob/main/Ekaterina_Kushnir_CV_EN.pdf"
                target="_blank"
              >
                  Resume
              </a>
            </div>
          </motion.div>
        </section>

        <section
          className='mt-10 mb-20 py-20 mx-20 relative cursor-default'
          id='about'
        >
          <Image
            src={ellipse1}
            alt="Decorative purple ellipse."
            width="800"
            height="800"
            className="ellipse1 absolute opacity-40"
          />
          <div className='pb-2 mb-10'>
            <h3 className='section-title uppercase'>about me</h3>
          </div>
          <div className='glass flex flex-col lg:flex-row p-10 gap-6'>
            <div className={`lg:w-1/3 text-left leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                <div className='flex pb-2 items-start gap-4'>
                  <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                  <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>attention to detail</h6>
                </div>
                <p>Every pixel counts in the digital realm. From layout alignment to color schemes, I thrive on perfecting the smallest details to create the best user experiences.</p>
            </div>
            <div className={`lg:w-1/3 text-left text-md leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                <div className='flex pb-2 items-start gap-4'>
                  <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                  <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>innovative problem-solving</h6>
                </div>
                <p>Challenges are opportunities in disguise. Whether troubleshooting bugs or optimizing performance, I thrive on finding creative solutions that push the boundaries of possibility.</p>
            </div>
            <div className={`lg:w-1/3 text-left text-md leading-7 lg:leading-8 text-gray-700 md:text-xl dark:text-white`}>
                <div className='flex pb-2 items-start gap-4'>
                  <AiFillCheckCircle className="mt-[4px] text-xl shrink-0 text-blue-500 dark:text-teal-100"/>
                  <h6 className='font-bold uppercase text-blue-500 dark:text-teal-100'>adaptability</h6>
                </div>
                <p>From mastering the latest JavaScript libraries to staying ahead of emerging design trends, I embrace change as an opportunity for growth and improvement.</p>
            </div>
          </div>
        </section>
        
        <section
          className='pt-18 mb-10 pb-20 px-20 relative'
          id='tools'
        >
          <Image
            src={ellipse3}
            alt="Decorative yellow ellipse."
            width="800"
            height="800"
            className="ellipse3 absolute opacity-60"
          />
          <Image
            src={vector2}
            alt="Decorative cyan ellipse."
            width="700"
            height="700"
            className="vector2 absolute opacity-50"
          />
          <div className='pb-3'>
            <h3 className='section-title uppercase'>technologies and tools i use</h3>
          </div>
          <div className='lg:flex lg:justify-between gap-6'>
            <div className='tech-group glass'>
              <Image src={front} width={100} height={100} alt="Frontend development illustration." />
              <h6 className='tech-group-title uppercase'>Frontend</h6>
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
            <div className='tech-group glass'>
              <Image src={back} width={100} height={100} alt="Backend development illustration." />
              <h6 className='tech-group-title uppercase'>Backend</h6>
              <div className="tech-subj"><FaPhp className="text-xl" /><p className='tech-item'>PHP</p></div>
              <div className="tech-subj"><SiCakephp className="text-l" /><p className='tech-item'>CakePHP</p></div>
              <div className="tech-subj"><FaNodeJs className="text-xl" /><p className='tech-item'>Node.js</p></div>
              <div className="tech-subj"><SiExpress className="text-xl" /><p className='tech-item'>Express.js</p></div>
              <div className="tech-subj"><SiMysql className="text-xl" /><p className='tech-item'>MySQL</p></div>
              <div className="tech-subj"><SiMongodb className="text-xl" /><p className='tech-item'>MongoDB</p></div>
            </div>
            <div className='tech-group glass'>
              <Image src={others} width={90} height={90} className="pt-1" alt="Web development illustration." />
              <h6 className='tech-group-title uppercase'>Others</h6>
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
          </div>
        </section>

        <section
          id="projects"
          className="relative"
        >
          <div>
            <h3 className='section-title uppercase'>check out my favorite pieces</h3>
          </div>
          <div className='flex flex-col gap-14 py-10 lg:flex-row lg:flex-wrap mx-20'>

            <div className='basis-1/3 flex-1'>
              <Image
                src={jscodegamer}
                alt="Jscodegamer app screenshot."
                className='hover-scale rounded-3xl object-cover shadow-lg'
                width={'100%'}
                height={'100%'}
              />
              <div className='flex gap-2 pt-6'>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Angular
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Express.js
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  MySQL
                </span>
              </div>
              <p className='dark:text-white pt-2 cursor-default'>
                <a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://jscodegamer.vercel.app">JSCODEGAMER </a> facilitates learning programming by providing interactive lessons and practical challenges in JavaScript. Its space-inspired environment creates an educational and motivating experience for users who want to embark on their programming journey. The app includes 9 levels that unlock progressively based on the user&apos;s progress, along with diverse challenges and an integrated code editor.
              </p>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={project1}
                alt="Task manager app screenshot."
                className='hover-scale rounded-3xl object-cover shadow-lg'
                width={'100%'}
                height={'100%'}
              />
              <div className='flex gap-2 pt-6'>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  React
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Bootstrap
                </span>
              </div>
              <p className='dark:text-white pt-2 cursor-default'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/task-manager">Task Manager App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.</p>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={project2}
                alt="Birthday planner app screenshot."
                className='hover-scale rounded-3xl object-cover shadow-lg'
                width={'100%'}
                height={'100%'}
              />
              <div className='flex gap-2 pt-6'>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  CakePHP
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  MySQL
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Bootstrap
                </span>
              </div>
              <p className='dark:text-white pt-2 cursor-default'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/my-birthday">Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.</p>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={kanbanVue}
                alt="KanbanVue app screenshot."
                className='hover-scale rounded-3xl object-cover shadow-lg'
                width={'100%'}
                height={'100%'}
              />
              <div className='flex gap-2 pt-6'>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Nuxt3
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  TypeScript
                </span>
                <span className='bg-blue-500 text-white text-xs cursor-default rounded-xl px-2 py-1'>
                  Tailwind CSS
                </span>
              </div>
              <p className='dark:text-white pt-2 cursor-default'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://kanban-vue-ruby.vercel.app/">KanbanVue</a> is a kanban board application for work management. Inspired by the principles of Agile methodologies, I wanted to build my own tool to easily visualize work and prioritize tickets. The user can customize columns and tickets and easily drag them around the board.</p>
            </div>
          </div>
        </section>

        <footer className='px-20 mt-20 pt-4 flex flex-col items-center dark:text-gray-200'>
            <a className="btn" href="#">Back</a>
            <p className='mt-10 text-sm cursor-default'>Making you vision reality</p>
            <p className='text-sm cursor-default'>&copy; 2024 Ekaterina Kushnir. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
