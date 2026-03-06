import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const highlights = [
  {value: '8+', label: 'Years Experience'},
  {value: '500+', label: 'Microservices'},
  {value: '99.95%', label: 'Uptime SLA'},
];

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-white dark:bg-slate-900" sectionId={SectionId.About}>
      <div className={`grid grid-cols-1 gap-y-8 ${profileImageSrc ? 'md:grid-cols-4 md:gap-x-12' : ''}`}>
        {!!profileImageSrc && (
          <motion.div
            className="col-span-1 flex justify-center md:justify-start"
            initial={{opacity: 0, scale: 0.9}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            whileInView={{opacity: 1, scale: 1}}>
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-4 ring-violet-500/20 md:h-48 md:w-48">
              <Image alt="profile" className="object-cover" fill src={profileImageSrc} />
            </div>
          </motion.div>
        )}
        <motion.div
          className={`col-span-1 flex flex-col gap-y-6 ${profileImageSrc ? 'md:col-span-3' : ''}`}
          initial={{opacity: 0, y: 20}}
          transition={{duration: 0.6, delay: 0.1}}
          viewport={{once: true}}
          whileInView={{opacity: 1, y: 0}}>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">About me</h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial="hidden"
            variants={{hidden: {}, show: {transition: {staggerChildren: 0.1}}}}
            viewport={{once: true}}
            whileInView="show">
            {highlights.map(({value, label}) => (
              <motion.div
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 py-4 dark:border-slate-700 dark:bg-slate-800"
                key={label}
                variants={{hidden: {opacity: 0, y: 10}, show: {opacity: 1, y: 0, transition: {duration: 0.4}}}}>
                <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">{value}</span>
                <span className="mt-0.5 text-center text-xs text-slate-500 dark:text-slate-400">{label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            initial="hidden"
            variants={{hidden: {}, show: {transition: {staggerChildren: 0.07}}}}
            viewport={{once: true}}
            whileInView="show">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <motion.li
                className="flex items-center gap-x-3"
                key={idx}
                variants={{
                  hidden: {opacity: 0, x: -10},
                  show: {opacity: 1, x: 0, transition: {duration: 0.4}},
                }}>
                {Icon && <Icon className="h-4 w-4 shrink-0 text-violet-500 dark:text-violet-400" />}
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}:</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
