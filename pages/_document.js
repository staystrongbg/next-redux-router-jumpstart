import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link
        href='https://fonts.googleapis.com/css2?family=Fira+Sans&family=Lato:wght@100;300&family=Staatliches&display=swap'
        rel='stylesheet'
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
