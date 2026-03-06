import {CodeBracketIcon} from '@heroicons/react/24/outline';
import {motion} from 'framer-motion';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Projects: FC = memo(() => {
  return (
    <Section className="bg-white dark:bg-slate-900" sectionId={SectionId.Projects}>
      <motion.div
        className="flex flex-col gap-y-8"
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        whileInView={{opacity: 1, y: 0}}>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Things I've built and shipped.</p>
        </div>
        <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-20 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="flex flex-col items-center gap-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-950/50">
              <CodeBracketIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            </div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Coming Soon</p>
            <p className="max-w-xs text-sm text-slate-400 dark:text-slate-500">
              Projects are currently being curated. Check back soon.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
