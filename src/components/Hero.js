import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div 
            initial={{ x: "-100vw", y: "-100vw" }} 
            animate={{ x: "0", y: "0" }} 
            transition={{ duration: 1.2 }} 
            className='glass place-self-center p-10 mx-20 lg:w-3/5 cursor-default'
        >
            <h2 className=' py-2 gradient-text font-extrabold text-6xl sm:text-7xl text-left'>Crafting seamless digital experiences</h2>
            <h3 className='text-3xl font-bold text-slate-800 dark:text-teal-100 pt-5 text-left'>Web Development | React | Angular | Vue</h3>
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
    )
}