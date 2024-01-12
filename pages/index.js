import Head from 'next/head'
import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Max van Hertrooij</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hoi, ik ben Max" />
        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
      </main>

      {/* <Footer /> */}
    </div>
  )
}
