import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {motion} from 'framer-motion';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import GithubIcon from '../../Icon/GithubIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import Section from '../../Layout/Section';

const iconMap: Record<string, FC<{className?: string}>> = {
  Github: GithubIcon,
  LinkedIn: LinkedInIcon,
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-slate-50 dark:bg-slate-800" sectionId={SectionId.Contact}>
      <motion.div
        className="flex flex-col items-center gap-y-10"
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        whileInView={{opacity: 1, y: 0}}>
        <div className="flex flex-col items-center gap-y-3 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{headerText}</h2>
          <p className="max-w-md text-slate-500 dark:text-slate-400">{description}</p>
        </div>
        <div className="flex w-full max-w-lg flex-col gap-4 sm:flex-row">
          {items.map(({type, text, href}) => {
            const Icon = iconMap[type];
            return (
              <motion.a
                className="group flex flex-1 items-center gap-x-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
                href={href}
                key={type}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{y: -3, borderColor: '#8b5cf6'}}
                whileTap={{scale: 0.98}}>
                {Icon && (
                  <Icon className="h-8 w-8 shrink-0 text-slate-400 transition-colors group-hover:text-violet-600 dark:text-slate-500 dark:group-hover:text-violet-400" />
                )}
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {type}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{text}</span>
                </div>
                <ArrowTopRightOnSquareIcon className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-violet-500 dark:text-slate-600 dark:group-hover:text-violet-400" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
