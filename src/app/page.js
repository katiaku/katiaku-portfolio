"use client";

import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import dev from '../../public/dev.png';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ekaterina Kushnir Mikhaylova Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12'>
            <ul className='flex items-center gap-3'>
              <li className='mr-auto'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li><a className="bg-gradient-to-b from-purple-500 to-blue-500 text-4xl" href="#"><AiFillLinkedin /></a></li>
              <li><a className="bg-gradient-to-b from-purple-500 to-blue-500 text-4xl" href="#"><AiFillGithub /></a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-600 font-medium md:text-6xl'>Ekaterina Kushnir Mikhaylova</h2>
            <h3 className='text-2xl pt-5 md:text-3xl'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>About me...</p>
            <a className="bg-gradient-to-b from-purple-600 to-blue-500 text-white px-4 py-2 leading-8 rounded-md" href="#">Resume</a>
          </div>
          <div className='flex flex-col'>
            <Image src={dev} alt="developer" width="300" height="300" />
            <span className='text-xs'>Image by <a href="https://www.freepik.com/free-vector/colorful-illustration-female-programmer-working_5483075.htm#page=2&query=woman%20developer&position=31&from_view=search&track=ais">Freepik</a></span>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-purple-600'>Technologies I Use</h3>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2 text-blue-500'>Frontend</h3>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Sass</p>
              <p className='text-gray-800 py-1'>Bootstrap</p>
              <p className='text-gray-800 py-1'>Tailwind</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>ReactJS</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2 text-blue-500'>Backend</h3>
              <p className='text-gray-800 py-1'>SQL (MySQL, PostgreSQL)</p>
              <p className='text-gray-800 py-1'>PHP</p>
              <p className='text-gray-800 py-1'>CakePHP</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2 text-blue-500'>UI/UX</h3>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Adobe XD</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/* <Image src={} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2 text-blue-500'>Others</h3>
              <p className='text-gray-800 py-1'>Git</p>
              <p className='text-gray-800 py-1'>GitHub</p>
              <p className='text-gray-800 py-1'>Trello</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-purple-600'>Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={project1} alt="project1" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              <p>About this project...</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={project2} alt="project2" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              <p>About this project...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
