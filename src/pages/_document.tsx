import TabName from '@/components/header/TabName';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"/>
          <div className="relative bg-gray-900 h-10 text-left p-2">
            <TabName link="/" tabName="Home"/>
            <TabName link="/diary" tabName="Diary"/>
        </div>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
