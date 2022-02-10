import '../styles/reset.css'
import '../styles/globals.scss'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       <link rel="stylesheet" href="https://use.typekit.net/daq0bze.css" />
    </Head>
    <Component {...pageProps} />
   </>
  )
}

export default MyApp
