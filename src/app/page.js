"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import dev from '../../public/dev.png';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
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
        <section className='min-h-screen pb-10'>
          <nav className='py-10 mb-12'>
            <ul className='flex items-center gap-5'>
              <li className='mr-auto shake'>
                <Expand  
                  toggled={isToggled} 
                  toggle={() => {
                    setToggle(!isToggled);
                    setDarkMode(!darkMode);
                  }} 
                  className='mt-2 cursor-pointer text-4xl text-gray-800 dark:text-white'
                />
              </li>
              <li className='shake'><a className="text-gray-800 text-4xl dark:text-white" target="_blank" href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"><AiFillLinkedin /></a></li>
              <li className='shake'><a className="text-gray-800 text-4xl dark:text-white" target="_blank" href="https://github.com/katiaku"><AiFillGithub /></a></li>
            </ul>
          </nav>
          <div className='text-center p-2 lg:py-24'>
            <h2 className='text-6xl py-2 gradient-text font-bold md:text-7xl'>Ekaterina Kushnir</h2>
            <h3 className='text-2xl font-bold text-blue-900 pt-5 md:text-3xl dark:text-blue-400'>Web Developer</h3>
            <p className='text-left text-md py-8 leading-7 lg:leading-9 text-gray-800 md:text-xl mx-auto dark:text-white'>
              If you&apos;re looking for a versatile web developer who can help you take advantage 
              of the latest advancements in the field, you&apos;ve come to the right place. 
              My proficiency in JavaScript, React and PHP coupled with enthusiasm 
              for crafting user-friendly interfaces and delivering exceptional user experiences, 
              constitute a solid foundation to build anything from basic static web pages 
              to more complex web applications. Please take a look around this site to find out more 
              about my skills as well as some examples of my work.</p>
            <div className='flex justify-center gap-5 mt-5'>
              <a className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 leading-8 rounded-md hover:ring-4 hover:ring-indigo-300" href="https://drive.google.com/file/d/1-gao6ygjUv6HNikOPWnf_mocNk6Dh9id/view?usp=share_link" target="_blank">Resume</a>
              <a className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 leading-8 rounded-md hover:ring-4 hover:ring-indigo-300" href="mailto:kushnir.ekaterina@gmail.com">Contact Me</a>
            </div>
          </div>
          <div className='flex flex-col items-center pt-3 pb-20'>
            <Image className="rounded-2xl mt-10" src={dev} alt="developer" width="500" height="500" />
            <span className='text-xs dark:text-white'>Image by <a href="https://www.freepik.com/free-vector/colorful-illustration-female-programmer-working_5483075.htm#page=2&query=woman%20developer&position=31&from_view=search&track=ais">Freepik</a></span>
          </div>
        </section>

        <section className='pt-18 pb-20'>
          <div>
            <h3 className='text-3xl py-1 text-purple-600 font-bold text-center'>Technologies and Tools I Use</h3>
          </div>
          <div className='lg:flex lg:justify-center lg:gap-10'>
            <div className='wobble text-center shadow-lg p-10 rounded-2xl my-10 dark:bg-white'>
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Frontend</h3>
              {/* <Image src={} width={100} height={100} /> */}
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Sass</p>
              <p className='text-gray-800 py-1'>Bootstrap</p>
              <p className='text-gray-800 py-1'>Tailwind</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>ReactJS</p>
            </div>
            <div className='wobble text-center shadow-lg p-10 rounded-2xl my-10 dark:bg-white'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Backend</h3>
              <p className='text-gray-800 py-1'>SQL (MySQL, PostgreSQL)</p>
              <p className='text-gray-800 py-1'>PHP</p>
              <p className='text-gray-800 py-1'>CakePHP</p>
            </div>
            <div className='wobble text-center shadow-lg p-10 rounded-2xl my-10 dark:bg-white'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>UI/UX</h3>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Adobe XD</p>
            </div>
            <div className='wobble text-center shadow-lg p-10 rounded-2xl my-10 dark:bg-white'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-semibold py-2 text-blue-500'>Others</h3>
              <p className='text-gray-800 py-1'>Git</p>
              <p className='text-gray-800 py-1'>GitHub</p>
              <p className='text-gray-800 py-1'>Trello</p>
              <p className='text-gray-800 py-1'>Postman</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl pb-1 pt-18 text-purple-600 text-center font-bold'>My Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={project1} alt="project1" className='rounded-2xl object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 font-semibold" target="_blank" href="https://github.com/katiaku/task-manager">The Task Manager React App</a> is a web app that allows users to manage their tasks in a simple and efficient way. Users can add new tasks to the list, edit or remove existing tasks. Each task in the app includes a description and a priority level that indicates its relative importance or urgency.</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project2} alt="project2" className='rounded-2xl object-cover shadow-lg' width={'100%'} height={'100%'} />
              <p className='dark:text-white pt-5'><a className="text-blue-500 font-semibold" target="_blank" href="https://github.com/katiaku/my-birthday">The CakePHP Birthday Planner for Kids</a> is a web application designed to help parents plan and manage their children&apos;s birthday parties. The app provides an intuitive interface that allows users to organize party details including lists of guests and presents.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
