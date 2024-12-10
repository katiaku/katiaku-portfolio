import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TechItem from './TechItem';

import front from '../../public/front-end.png';
import back from '../../public/back-end.png';
import webDesign from '../../public/web-design.png';
import ellipseYellow from '../../public/ellipseYellow.png';
import vectorCyan from '../../public/vectorCyan.png';

import {
    IoLogoCss3,
    IoLogoHtml5,
} from 'react-icons/io';
import {
    FaBootstrap,
    FaReact,
    FaFigma,
    FaJira,
    FaVuejs,
    FaNodeJs,
    FaPhp,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaSass
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiJest,
    SiStorybook,
    SiPostman,
    SiCypress,
    SiExpress,
    SiThreedotjs
} from 'react-icons/si';

const frontend = [
    { Icon: IoLogoHtml5, name: 'HTML' },
    { Icon: IoLogoCss3, name: 'CSS' },
    { Icon: FaSass, name: 'Sass' },
    { Icon: SiTailwindcss, name: 'Tailwind' },
    { Icon: FaBootstrap, name: 'Bootstrap' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: FaReact, name: 'React' },
    { Icon: FaReact, name: 'ReactNative' },
    { Icon: FaVuejs, name: 'Vue' },
    { Icon: SiThreedotjs, name: 'Three.js' },
];

const backend = [
    { Icon: FaPhp, name: 'PHP' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: SiExpress, name: 'Express.js' },
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
];

const others = [
    { Icon: SiJest, name: 'Jest' },
    { Icon: SiCypress, name: 'Cypress' },
    { Icon: SiStorybook, name: 'Storybook' },
    { Icon: SiPostman, name: 'Postman' },
    { Icon: FaGitAlt, name: 'Git' },
    { Icon: FaGithub, name: 'GitHub' },
    { Icon: FaGitlab, name: 'GitLab' },
    { Icon: FaFigma, name: 'Figma' },
    { Icon: FaJira, name: 'JIRA' },
];

export default function Tools() {
    const { t } = useTranslation();

    const renderTechGroup = (title, image, items, delay) => (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, ease: 'easeOut', duration: 1 }}
            className="tech-group glass"
        >
            <Image src={image} width={100} height={100} alt={t(`${title}_illustration`)} />
            <h4 className="tech-group-title uppercase">{t(title)}</h4>
            <div className="flex flex-col md:flex-row lg:flex-col md:flex-wrap gap-3 md:gap-y-2 md:justify-center md:gap-8 lg:gap-2 pb-2">
                {items.map(({ Icon, name }) => (
                    <TechItem key={name} Icon={Icon} name={name} />
                ))}
            </div>
        </motion.div>
    );

    return (
        <section
            className="pt-18 mb-20 px-8 md:px-20 relative scroll-mt-28 snap-start"
            id="tools"
        >
            <div className="ellipse-yellow absolute">
                <Image
                    src={ellipseYellow}
                    alt={t('ellipse_yellow')}
                    width="900"
                    height="900"
                    className="opacity-50"
                />
            </div>

            <div className="vector-cyan absolute">
                <Image
                    src={vectorCyan}
                    alt={t('cyan_vector')}
                    width="900"
                    height="900"
                    className="opacity-30"
                />
            </div>

            <div className="pb-3">
                <h3 className="section-title uppercase">{t('section_header_tools')}</h3>
            </div>

            <div className="lg:flex lg:justify-between gap-6">
                {renderTechGroup('tools_frontend', front, frontend, 0)}
                {renderTechGroup('tools_backend', back, backend, 0.8)}
                {renderTechGroup('tools_others', webDesign, others, 1.6)}
            </div>
        </section>
    );
}
