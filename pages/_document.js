import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript/>
            <Script src="assets/js/jquery-3.5.1.min.js" strategy='beforeInteractive'></Script>
            <Script src="assets/js/bootstrap.min.js" strategy='beforeInteractive'></Script>
            <Script src="assets/js/slick.js" strategy='beforeInteractive'></Script>
            <Script src="assets/js/templatemo-script.js" strategy='beforeInteractive'></Script>


      </body>
    </Html>
  )
}
