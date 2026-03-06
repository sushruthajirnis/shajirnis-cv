import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {FC, memo, useEffect, useState} from 'react';

import {SectionId} from '../../data/data';
import {useTerminalAnimation} from '../../hooks/useTypingEffect';
import Section from '../Layout/Section';
import Socials from '../Socials';

const terminalEntries = [
  {cmd: 'whoami', output: 'sushrut-hajirnis'},
  {cmd: 'cat role.txt', output: 'Senior Site Reliability Engineer @ Intuit'},
  {cmd: 'ls ./skills', output: 'kubernetes/  golang/  aws/'},
] as const;

const Hero: FC = memo(() => {
  const {completedLines, currentTyped} = useTerminalAnimation(terminalEntries);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-20">
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"
        />
        {/* Violet ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl"
        />

        <div className="relative z-10 w-full max-w-2xl">
          <h1 className="mb-6 text-center font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Sushrut Hajirnis
          </h1>

          {/* Terminal window */}
          <div className="overflow-hidden rounded-xl border border-slate-700/60 shadow-2xl shadow-violet-500/10">
            {/* Title bar */}
            <div className="flex items-center gap-x-1.5 bg-slate-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">sushrut@portfolio — bash</span>
            </div>

            {/* Terminal body */}
            <div className="min-h-[220px] bg-slate-950 p-5 font-mono text-sm leading-relaxed sm:text-base">
              {completedLines.map((line, i) =>
                line.text === '' ? (
                  <div key={i} className="h-4" />
                ) : (
                  <div key={i} className={line.isCommand ? 'text-violet-400' : 'text-slate-300'}>
                    {line.text}
                  </div>
                ),
              )}
              {currentTyped !== '' && (
                <div className="text-violet-400">
                  {currentTyped}
                  <span className={cursorOn ? 'opacity-100' : 'opacity-0'}>▋</span>
                </div>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-x-2 text-slate-400">
            <Socials />
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Resume available on request —{' '}
            <a
              className="text-violet-400 underline-offset-2 hover:underline"
              href="https://www.linkedin.com/in/sushruthajirnis/"
              rel="noopener noreferrer"
              target="_blank">
              reach out on LinkedIn
            </a>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full p-2 text-slate-500 ring-1 ring-slate-700 transition-colors hover:text-slate-200 hover:ring-slate-500 focus:outline-none"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
