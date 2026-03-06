import {useEffect, useState} from 'react';

export type TerminalLine = {
  text: string;
  isCommand: boolean;
};

export const useTerminalAnimation = (entries: ReadonlyArray<{cmd: string; output: string}>) => {
  const [completedLines, setCompletedLines] = useState<TerminalLine[]>([]);
  const [currentTyped, setCurrentTyped] = useState('');

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

    const run = async () => {
      await sleep(600);

      for (const {cmd, output} of entries) {
        if (cancelled) return;
        const line = `$ ${cmd}`;

        for (let i = 1; i <= line.length; i++) {
          if (cancelled) return;
          setCurrentTyped(line.slice(0, i));
          await sleep(65);
        }

        if (cancelled) return;
        setCurrentTyped('');
        setCompletedLines(prev => [...prev, {text: line, isCommand: true}]);

        await sleep(200);
        if (cancelled) return;
        setCompletedLines(prev => [
          ...prev,
          {text: output, isCommand: false},
          {text: '', isCommand: false},
        ]);

        await sleep(400);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {completedLines, currentTyped};
};
