import {motion} from 'framer-motion';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem; index?: number}> = memo(({item, index = 0}) => {
  const {title, date, location, content} = item;
  const isCurrent = date.toLowerCase().includes('present');
  return (
    <motion.div
      className="relative flex gap-x-4 pb-8 last:pb-0"
      initial={{opacity: 0, y: 16}}
      transition={{duration: 0.5, delay: index * 0.1}}
      viewport={{once: true}}
      whileInView={{opacity: 1, y: 0}}>
      {/* Timeline indicator */}
      <div className="flex flex-col items-center">
        <div
          className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-violet-500 ${
            isCurrent ? 'bg-violet-500 shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]' : 'bg-white dark:bg-slate-900'
          }`}
        />
        <div className="mt-1 w-px flex-1 border-l-2 border-dashed border-slate-200 dark:border-slate-700" />
      </div>
      {/* Content */}
      <div className="flex flex-col pb-2">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-base">
          <span className="font-medium text-slate-600 dark:text-slate-300">{location}</span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="text-slate-500 dark:text-slate-400">{date}</span>
        </div>
        <div className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">{content}</div>
      </div>
    </motion.div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
