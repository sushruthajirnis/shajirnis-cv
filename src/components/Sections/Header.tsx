import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Projects, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      'text-sm font-medium capitalize tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-1 py-0.5';
    const activeClass = classNames(baseClass, 'text-violet-600 dark:text-violet-400');
    const inactiveClass = classNames(
      baseClass,
      'text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400',
    );
    return (
      <header
        className="fixed top-0 z-50 hidden w-full border-b border-slate-200/60 bg-white/80 px-6 py-4 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80 sm:block"
        id={headerID}>
        <nav className="mx-auto flex max-w-screen-lg items-center justify-between">
          <span className="font-mono text-sm text-slate-400 dark:text-slate-500">sushrut.sh</span>
          <div className="flex items-center gap-x-8">
            {navSections.map(section => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
              />
            ))}
          </div>
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleOpen = useCallback(() => setIsOpen(v => !v), []);

    const baseClass =
      'px-4 py-3 rounded-lg text-sm font-medium capitalize tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500';
    const activeClass = classNames(
      baseClass,
      'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
    );
    const inactiveClass = classNames(
      baseClass,
      'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
    );

    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-4 top-4 z-40 rounded-lg bg-white p-2 shadow-md ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <div className="absolute right-0 h-full w-72 bg-white shadow-xl dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
                  <span className="font-mono text-sm text-slate-400 dark:text-slate-500">sushrut.sh</span>
                  <button
                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    onClick={toggleOpen}>
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-y-1 p-4">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link className={current ? activeClass : inactiveClass} href={`/#${section}`} onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
