import { useState } from 'react';
import Image from 'next/image';
import logo from '../app/icon.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Expand } from "@theme-toggles/react";

export default function Header({ darkMode, toggleDarkMode }) {

    const [isToggled, setToggle] = useState(true);

    return (
        <nav className='header-glass fixed w-full z-10 py-1 px-3'>
            <ul className='flex items-center gap-6 md:gap-8'>
                <li>
                    <Image
                        src={logo}
                        alt="personal E.K. logo"
                        width={30}
                        height={30}
                        className='m-3'
                    />
                </li>

                <ul className='flex justify-center items-center gap-6 md:gap-10 ml-auto'>
                    <li className='menu-item'>
                        <a className='uppercase' href="#about">
                            about
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a className='uppercase' href="#tools">
                            tools
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a className='uppercase' href="#projects">
                            my work
                        </a>
                    </li>
                </ul>

                <ul className='flex justify-center items-center gap-4 md:gap-6 mr-3'>
                    <li>
                        <a
                            className="icon-link"
                            target="_blank"
                            href="https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            className="icon-link"
                            target="_blank"
                            href="https://github.com/katiaku">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <Expand  
                            toggled={isToggled} 
                            toggle={() => {
                                setToggle(!isToggled);
                                toggleDarkMode();
                            }} 
                            className='mt-2 cursor-pointer icon-link'
                        />
                    </li>
                </ul>
            </ul>
        </nav>
    );
};
