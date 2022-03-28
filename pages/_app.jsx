import '../styles/globals.css'
import { Navbar } from '../components/scafold/Navbar'
import { Footer } from "../components/scafold/Footer"
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class" themes={['light', 'dark']}>
    <div className="flex flex-col min-h-screen ">
      <Head>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Navbar />
      <div className="grow">
        <Component {...pageProps} />
      </div>
    </div>
    <Footer />
  </ThemeProvider>
}

export default App
