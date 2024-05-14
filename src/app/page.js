"use client";

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import logo from './icon.png';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { motion } from "framer-motion";
// import Cursor from '@/components/Cursor';
import background from '../../public/background.png';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';

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
        className='scroll-smooth snap-y relative select-none bg-slate-100 pb-10 dark:bg-gray-900 transition-all duration-300 w-screen'
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
          className='flex flex-col h-screen pb-20 mb-[10rem] md:mb-[2rem] relative'
        >
          <motion.nav
            initial={{ x: "1000vw" }}
            animate={{ x: "0" }}
            transition={{ duration: 1.5 }}
            className='header-glass fixed w-full z-10 py-1 px-3 lg:mb-[150px] md:mb-[130px] mb-[100px]'
          >
            <ul className='flex items-center gap-6 md:gap-8'>
              <li>
                <Image
                  src={logo}
                  alt="personal EK logo"
                  width={30}
                  height={30}
                  className='m-3'
                />
              </li>

              <ul className='flex justify-center items-center gap-6 md:gap-10 ml-auto'>
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

              <ul className='flex justify-center items-center gap-4 md:gap-6 mr-3'>
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

          <Hero />

        </section>

        <About />
        <Tools />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
