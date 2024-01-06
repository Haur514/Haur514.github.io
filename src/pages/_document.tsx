import TabName from '@/components/header/TabName';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { basePath } from "../../next.config.js";
const BASE_PATH = basePath ? basePath: "";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"/>
          <div className="relative bg-gray-900 h-10 text-left p-2">
            <TabName link={BASE_PATH+"/"} tabName="Home"/>
            <TabName link={BASE_PATH+"/diary"} tabName="Diary"/>
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
