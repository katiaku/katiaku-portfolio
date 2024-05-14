import Image from 'next/image';
import { AiFillCheckCircle } from "react-icons/ai";
import ellipsePurple from '../../public/ellipsePurple.png';

export default function About() {
    return (
        <section
            className='mt-10 mb-20 py-20 mx-20 relative cursor-default'
            id='about'
        >
            <Image
                src={ellipsePurple}
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
    )
}
