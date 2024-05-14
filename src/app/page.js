"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import "@theme-toggles/react/css/Expand.css";
import background from '../../public/background.png';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Header from '@/components/Header';

export default function Home() {

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
          <Header
            darkMode={ darkMode }
            toggleDarkMode={ () => setDarkMode(prevMode => !prevMode) }
          />

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
