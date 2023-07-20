"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import logo from '../../public/logo.png';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

export default function Home() {

  const [isToggled, setToggle] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ekaterina Kushnir Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 pb-20 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section id="top" className='min-h-screen pb-20'>
          <nav className='py-10 mb-12'>
            <ul className='flex flex-col sm:flex-row sm:items-center gap-4'>
              <li>
                <Image src={logo} width={30} height={30} className='mb-4' />
              </li>
              <ul className='flex justify-center items-center gap-4 sm:ml-auto'>
                <li className='hover:text-purple-900 hover:underline cursor-pointer'><a href="#about">About</a></li>
                <li className='hover:text-purple-900 hover:underline cursor-pointer'><a href="#tools">Tools</a></li>
                <li className='hover:text-purple-900 hover:underline cursor-pointer'><a href="#portfolio">Portfolio</a></li>
              </ul>
              <ul className='flex justify-center items-center items-right gap-4'>
                <li className='shake'><a className="text-gray-800 text-xl dark:text-white" target="_blank" href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"><AiFillLinkedin /></a></li>
                <li className='shake'><a className="text-gray-800 text-xl dark:text-white" target="_blank" href="https://github.com/katiaku"><AiFillGithub /></a></li>
                <li className='shake'>
                  <Expand  
                    toggled={isToggled} 
                    toggle={() => {
                      setToggle(!isToggled);
                      setDarkMode(!darkMode);
                    }} 
                    className='mt-2 cursor-pointer text-xl text-gray-800 dark:text-white'
                  />
                </li>
              </ul>
            </ul>
          </nav>

          <div className='text-center p-2 sm:py-24'>
            <h2 className='py-2 gradient-text font-extrabold text-6xl sm:text-7xl'>Ekaterina Kushnir</h2>
            <h3 className='text-2xl font-bold text-purple-700 pt-5 dark:text-blue-400'>Web Developer</h3>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-7 mt-20'>
              <a className="bg-gradient-to-r from-purple-700 to-blue-500 text-white px-8 py-1 leading-8 rounded-3xl hover:ring-4 hover:ring-indigo-200" href="https://drive.google.com/file/d/1-gao6ygjUv6HNikOPWnf_mocNk6Dh9id/view?usp=share_link" target="_blank">Resume</a>
              <a className="bg-gradient-to-r from-purple-700 to-blue-500 text-white px-5 py-1 leading-8 rounded-3xl hover:ring-4 hover:ring-indigo-200" href="mailto:kushnir.ekaterina@gmail.com">Contact Me</a>
            </div>
          </div>
        </section>

        <section className='pb-20'>
          <div className='pb-3'>
            <h3 className='text-3xl py-1 text-purple-700 font-bold text-center' id='about'>About Me</h3>
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
          <div className='pb-3'>
            <h3 className='text-3xl py-1 text-purple-700 font-bold text-center' id='tools'>Technologies And Tools I Use</h3>
          </div>
          <div className='lg:flex lg:justify-between gap-10'>
            <div className='lg:w-1/4 text-center shadow-lg p-10 rounded-md my-10 dark:bg-gray-700'>
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Frontend</h3>
              {/* <Image src={} width={100} height={100} /> */}
              <p className='text-gray-800 py-1 dark:text-white'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
              <p className='text-gray-800 py-1 dark:text-white'>Sass</p>
              <p className='text-gray-800 py-1 dark:text-white'>Bootstrap</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>TypeScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>React</p>
              <p className='text-gray-800 py-1 dark:text-white'>jQuery</p>
              <p className='text-gray-800 py-1 dark:text-white'>Three.js</p>
            </div>
            <div className='lg:w-1/4 text-center shadow-lg p-10 rounded-md my-10 dark:bg-gray-700'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Backend</h3>
              <p className='text-gray-800 py-1 dark:text-white'>PHP</p>
              <p className='text-gray-800 py-1 dark:text-white'>CakePHP</p>
              <p className='text-gray-800 py-1 dark:text-white'>Node.js</p>
              <p className='text-gray-800 py-1 dark:text-white'>Express</p>
              <p className='text-gray-800 py-1 dark:text-white'>MySQL</p>
              <p className='text-gray-800 py-1 dark:text-white'>PostgreSQL</p>
              <p className='text-gray-800 py-1 dark:text-white'>MongoDB</p>
            </div>
            <div className='lg:w-1/4 text-center shadow-lg p-10 rounded-md my-10 dark:bg-gray-700'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>UI/UX</h3>
              <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-white'>Adobe XD</p>
              <p className='text-gray-800 py-1 dark:text-white'>Spline</p>
            </div>
            <div className='lg:w-1/4 text-center shadow-lg p-10 rounded-md my-10 dark:bg-gray-700'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Others</h3>
              <p className='text-gray-800 py-1 dark:text-white'>Postman</p>
              <p className='text-gray-800 py-1 dark:text-white'>Git</p>
              <p className='text-gray-800 py-1 dark:text-white'>GitHub</p>
              <p className='text-gray-800 py-1 dark:text-white'>Trello</p>
              <p className='text-gray-800 py-1 dark:text-white'>Jira</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl pb-6 pt-18 text-purple-700 text-center font-bold' id='portfolio'>My Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-auto'>
            <div className='basis-1/3 flex-1'>
              <Image src={project1} alt="project1" className='rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 font-semibold" target="_blank" href="https://github.com/katiaku/task-manager">The Task Manager React App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project2} alt="project2" className='rounded-md object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 font-semibold" target="_blank" href="https://github.com/katiaku/my-birthday">The CakePHP Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.</p>
            </div>
          </div>
        </section>

        <footer className='my-2 mt-8 flex justify-center'>
          <a className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-1 leading-8 rounded-3xl hover:ring-4 hover:ring-indigo-200" href="#">Back To Top</a>
        </footer>
      </main>
    </div>
  )
}
