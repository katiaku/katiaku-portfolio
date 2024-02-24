"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import jscodegamer from '../../public/jscodegamer_game.png';
import logo from './icon.png';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { motion } from "framer-motion";
import Cursor from '@/components/Cursor';
import background from '../../public/bg.png';

export default function Home() {

  const [isToggled, setToggle] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ekaterina Kushnir Portfolio</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="icon.png" />
      </Head>

      {/* <main id="main" className='bg-white px-10 pb-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-all duration-300'> */}
      <main id="main" className='relative bg-white pb-10 dark:bg-gray-900 transition-all duration-300'>

        <div id="background">
          <Image src={background} alt="background" />
        </div>
        
        {/* <Cursor /> */}

        <section id="top" className='h-screen pb-20 mb-20'>
          <motion.nav
            initial={{ y: "-100vw"}}
            animate={{ y: "0"}}
            className='pt-0 pb-10 mb-12'
          >
            <ul className='flex flex-col sm:flex-row sm:items-center gap-8 bg-slate-300/40'>
              <li>
                <Image src={logo} alt="logo" width={30} height={30} className='m-3' />
              </li>
              <ul className='flex justify-center items-center gap-10 sm:ml-auto'>
                <li className='menu-item'><a href="#about">ABOUT</a></li>
                <li className='menu-item'><a href="#tools">TOOLS</a></li>
                <li className='menu-item'><a href="#projects">PROJECTS</a></li>
              </ul>
              <ul className='flex justify-center items-center items-right gap-6 mr-3'>
                <li className='shake'><a className="icon-link" target="_blank" href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"><AiFillLinkedin /></a></li>
                <li className='shake'><a className="icon-link" target="_blank" href="https://github.com/katiaku"><AiFillGithub /></a></li>
                <li className='shake'>
                  <Expand  
                    toggled={isToggled} 
                    toggle={() => {
                      setToggle(!isToggled);
                      setDarkMode(!darkMode);
                    }} 
                    className='mt-2 cursor-pointer icon-link'
                  />
                </li>
              </ul>
            </ul>
          </motion.nav>
          <div className='text-center p-2 sm:py-24'>
            <motion.h2 initial={{ x: "-100vw"}} animate={{ x: "0"}} transition={{ duration: 1.2 }} className='py-2 gradient-text font-extrabold text-6xl sm:text-7xl'>Ekaterina Kushnir</motion.h2>
            <motion.h3 initial={{ x: "100vw"}} animate={{ x: "0"}} transition={{ duration: 1.2 }} className='text-3xl font-bold text-purple-700 pt-5 dark:text-blue-400'>Full Stack Developer</motion.h3>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className='flex flex-col sm:flex-row items-center justify-center gap-7 mt-20'>
              <a className="btn z-10" href="mailto:kushnir.ekaterina@gmail.com">Contact Me</a>
              <a className="btn z-10" href="https://github.com/katiaku/katiaku/blob/main/Ekaterina_Kushnir_CV_EN.pdf" target="_blank">Resume</a>
            </motion.div>
          </div>
        </section>

        <section className='pb-20 pt-20 mx-20'>
          <div className='pb-3'>
            <h3 className='section-title' id='about'>About Me</h3>
          </div>
          <div className='about-card bg-slate-200/40'>
            <p className={`text-left text-md py-10 leading-7 lg:leading-8 text-gray-700 md:text-xl mx-auto dark:text-white`}>
                  Looking for a versatile web developer who can help you take advantage 
                  of the latest advancements in the field? You&apos;ve come to the right place! 
                  My proficiency in full stack development coupled with enthusiasm 
                  for crafting user-friendly interfaces and delivering exceptional user experiences, 
                  constitute a solid foundation to build anything from static web pages 
                  to complex web applications. Please take a look around this site to find out more 
                  about my skills as well as some examples of my work.
            </p>
          </div>
        </section>
        
        <section className='pt-18 pb-20 mx-20'>
          <div className='pb-3'>
            <h3 className='section-title' id='tools'>Technologies And Tools I Use</h3>
          </div>
          <div className='lg:flex lg:justify-between gap-6'>
            <div className='tech-group'>
              <h3 className='tech-group-title'>Frontend</h3>
              {/* <Image src={} width={100} height={100} /> */}
              <p className='tech-item'>HTML</p>
              <p className='tech-item'>CSS</p>
              <p className='tech-item'>Sass</p>
              <p className='tech-item'>Bootstrap</p>
              <p className='tech-item'>Tailwind</p>
              <p className='tech-item'>JavaScript</p>
              <p className='tech-item'>TypeScript</p>
              <p className='tech-item'>Angular</p>
              <p className='tech-item'>React</p>
              <p className='tech-item'>jQuery</p>
              <p className='tech-item'>Three.js</p>
            </div>
            <div className='tech-group'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='tech-group-title'>Backend</h3>
              <p className='tech-item'>PHP</p>
              <p className='tech-item'>CakePHP</p>
              <p className='tech-item'>Node.js</p>
              <p className='tech-item'>Express</p>
              <p className='tech-item'>MySQL</p>
              <p className='tech-item'>MongoDB</p>
            </div>
            <div className='tech-group'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='tech-group-title'>Others</h3>
              <p className='tech-item'>Figma</p>
              <p className='tech-item'>Postman</p>
              <p className='tech-item'>Git</p>
              <p className='tech-item'>GitHub</p>
              <p className='tech-item'>Trello</p>
              <p className='tech-item'>Jira</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='section-title' id='projects'>My Projects</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-20'>
            <div className='basis-1/3 flex-1'>
              <Image src={jscodegamer} alt="jscodegamer" className='hover-scale rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <div className='flex gap-2 pt-4'>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>Angular</span>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>Express.js</span>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>MySQL</span>
              </div>
              <p className='dark:text-white pt-2'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://jscodegamer.vercel.app">JSCODEGAMER</a> facilitates learning programming by providing interactive lessons and practical challenges in JavaScript. Its space-inspired environment creates an educational and motivating experience for users who want to embark on their programming journey. The app includes 9 levels that unlock progressively based on the user&apos;s progress, along with diverse challenges and an integrated code editor.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project1} alt="project1" className='hover-scale rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <div className='flex gap-2 pt-4'>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>React</span>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>Bootstrap</span>
              </div>
              <p className='dark:text-white pt-2'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/task-manager">Task Manager App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project2} alt="project2" className='hover-scale rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <div className='flex gap-2 pt-4'>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>CakePHP</span>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>MySQL</span>
                <span className='bg-blue-500 text-white text-xs rounded-xl px-2 py-1'>Bootstrap</span>
              </div>
              <p className='dark:text-white pt-2'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/my-birthday">Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="" className='rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <div className='flex gap-2 pt-4'>
                <span className=''></span>
                <span className=''></span>
                <span className=''></span>
              </div>
              <p className='dark:text-white pt-2'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href=""></a></p>
            </div>
          </div>
        </section>

        <footer className='mt-8 flex flex-col gap-6 items-center dark:text-gray-200'>
            <a className="btn" href="#">Back To Top</a>
            <p>Ekaterina Kushnir | Portfolio 2023-2024 &copy;</p>
        </footer>
      </main>
    </div>
  )
}
