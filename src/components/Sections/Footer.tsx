import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-slate-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-white p-2 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5 text-slate-600" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-2 text-slate-500">
        <Socials />
      </div>
      <span className="font-mono text-sm text-slate-600">© {currentYear} Sushrut Hajirnis</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
