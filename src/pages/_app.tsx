import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Inter, JetBrains_Mono} from 'next/font/google';
import {memo} from 'react';

const inter = Inter({subsets: ['latin'], variable: '--font-inter', display: 'swap'});
const mono = JetBrains_Mono({subsets: ['latin'], variable: '--font-mono', display: 'swap'});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <div className={`${inter.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
});

export default MyApp;
