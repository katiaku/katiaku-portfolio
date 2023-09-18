"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import logo from './icon.png';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from "framer-motion";

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

      <main className='bg-white px-10 pb-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-all duration-300'>

        <section id="top" className='h-screen pb-20'>
          <nav className='py-10 mb-12'>
            <ul className='flex flex-col sm:flex-row sm:items-center gap-8'>
              <li>
                <Image src={logo} width={30} height={30} className='mb-4' />
              </li>
              <ul className='flex justify-center items-center gap-10 sm:ml-auto'>
                <li className='menu-item'><a href="#about">About</a></li>
                <li className='menu-item'><a href="#tools">Tools</a></li>
                <li className='menu-item'><a href="#portfolio">Portfolio</a></li>
              </ul>
              <ul className='flex justify-center items-center items-right gap-6'>
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
          </nav>
          <div className='text-center p-2 sm:py-24'>
            <h2 className='py-2 gradient-text font-extrabold text-6xl sm:text-7xl'>Ekaterina Kushnir</h2>
            <h3 className='text-3xl font-bold text-purple-700 pt-5 dark:text-blue-400'>Web Developer</h3>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-7 mt-20'>
              <a className="btn" href="https://drive.google.com/file/d/1aEOmRYnP0JytDgkhKy0Ycg3YBtrjG3Vt/view?usp=drive_link" target="_blank">Resume</a>
              <a className="btn" href="mailto:kushnir.ekaterina@gmail.com">Contact Me</a>
            </div>
          </div>
        </section>

        <section className='pb-20'>
          <div className='pb-3'>
            <h3 className='section-title' id='about'>About Me</h3>
          </div>
          <p className='text-left text-md py-10 leading-7 lg:leading-8 text-gray-700 md:text-xl mx-auto dark:text-white'>
                If you&apos;re looking for a versatile web developer who can help you take advantage 
                of the latest advancements in the field, you&apos;ve come to the right place. 
                My proficiency in full stack development coupled with enthusiasm 
                for crafting user-friendly interfaces and delivering exceptional user experiences, 
                constitute a solid foundation to build anything from basic static web pages 
                to more complex web applications. Please take a look around this site to find out more 
                about my skills as well as some examples of my work.</p>
        </section>

        <section className='pt-18 pb-20'>
          <motion.div
          initial={{ x: "-100vw"}}
          animate={{ x: "0"}}
          exit={{ y: "-100vw"}}
          className='pb-3'
          >
            <h3 className='section-title' id='tools'>Technologies And Tools I Use</h3>
          </motion.div>
          <div className='lg:flex lg:justify-between gap-10'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            className='tech-group'>
              <h3 className='tech-group-title'>Frontend</h3>
              {/* <Image src={} width={100} height={100} /> */}
              <p className='tech-item'>HTML</p>
              <p className='tech-item'>CSS</p>
              <p className='tech-item'>Sass</p>
              <p className='tech-item'>Bootstrap</p>
              <p className='tech-item'>Tailwind</p>
              <p className='tech-item'>JavaScript</p>
              <p className='tech-item'>TypeScript</p>
              <p className='tech-item'>React</p>
              <p className='tech-item'>jQuery</p>
              <p className='tech-item'>Three.js</p>
            </motion.div>
            <div className='tech-group'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='tech-group-title'>Backend</h3>
              <p className='tech-item'>PHP</p>
              <p className='tech-item'>CakePHP</p>
              <p className='tech-item'>Node.js</p>
              <p className='tech-item'>Express</p>
              <p className='tech-item'>MySQL</p>
              <p className='tech-item'>PostgreSQL</p>
              <p className='tech-item'>MongoDB</p>
            </div>
            <div className='tech-group'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='tech-group-title'>UI/UX</h3>
              <p className='tech-item'>Figma</p>
              <p className='tech-item'>Adobe XD</p>
              <p className='tech-item'>Spline</p>
            </div>
            <div className='tech-group'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='tech-group-title'>Others</h3>
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
            <h3 className='section-title' id='portfolio'>My Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-auto'>
            <div className='basis-1/3 flex-1'>
              <Image src={project1} alt="project1" className='rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/task-manager">The Task Manager React App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project2} alt="project2" className='rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 dark:text-blue-400 font-bold" target="_blank" href="https://github.com/katiaku/my-birthday">The CakePHP Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
