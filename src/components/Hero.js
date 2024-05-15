import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="top"
            className='flex justify-center items-center h-screen relative px-8 md:px-20'
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.6 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ ease: "easeOut", duration: 3 }} 
                className='glass cursor-default p-10 lg:py-14 mt-12 lg:w-3/4'
            >
                <h2 className='py-2 gradient-text font-extrabold text-5xl md:text-6xl sm:text-7xl text-left'>Crafting seamless digital experiences</h2>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-teal-100 pt-5 text-left'>Web Development | React | Angular | Vue</h3>
                <div className='flex flex-col sm:flex-row items-center justify-start gap-7 mt-20'>
                    <a
                        className="btn z-10"
                        href="mailto:kushnir.ekaterina@gmail.com"
                    >
                        Contact Me
                    </a>
                    <a
                        className="btn z-10"
                        href="https://github.com/katiaku/katiaku/blob/main/Ekaterina_Kushnir_CV_EN.pdf"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
