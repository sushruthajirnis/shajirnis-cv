import {motion} from 'framer-motion';
import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">{name}</span>
      <div className="flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill index={index} key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType; index?: number}> = memo(({skill, index = 0}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center justify-between">
        <span className="text-base text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs tabular-nums text-slate-400 dark:text-slate-500">
          {level}/{max}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-violet-500 dark:bg-violet-400"
          initial={{width: 0}}
          transition={{duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08}}
          viewport={{once: true}}
          whileInView={{width: `${percentage}%`}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
