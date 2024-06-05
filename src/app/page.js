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
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Sidebar from '@/components/Sidebar';
import { ContactForm } from '@/components/ContactForm';


i18next.init({
  interpolation: { escapeValue: false },
});

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div className={ darkMode ? "dark" : "" }>
        <Head>
          <title>Web Developer Portfolio</title>
          <meta name="description" content="Web developer portfolio, modern web development with React, Angular and Vue." />
          <link rel="icon" href="icon.png" />
        </Head>

        <main
          id="main"
          className='scroll-smooth snap-y relative select-none bg-slate-100 pb-10 dark:bg-gray-900 transition-all duration-300 w-screen overflow-hidden'
        >
          <Sidebar isOpen={ isSidebarOpen } onClose={ toggleSidebar } />

          <div id="background" className='absolute w-full z-0'>
            <Image
              src={background}
              alt="Futuristic background of purple, yellow and cyan colored blocks"
              className='opacity-90'
            />
          </div>
          
          {/* <Cursor /> */}

          <Header
              darkMode={ darkMode }
              toggleDarkMode={ () => setDarkMode(prevMode => !prevMode) }
              onHamburgerClick={ toggleSidebar }
              isSidebarOpen={isSidebarOpen}
          />

          <Hero />
          <About />
          <Tools />
          <Projects />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </I18nextProvider>
  )
}
