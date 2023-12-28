import TabName from '@/components/header/TabName';
import { AppProps } from 'next/app';
import Head from 'next/head';
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ホームページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <div className="relative bg-gray-900 h-10 text-left p-2">
          <TabName link="/" tabName="Home"/>
          <TabName link="/diary" tabName="Diary"/>
        </div>
    </Head>
    <Component {...pageProps}/>
  </>
)

export default App;
