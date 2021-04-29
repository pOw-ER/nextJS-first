import Head from 'next/head'
import Header from '../components/header'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>New Next App</title>
      </Head>
      <Header />
      <h1>Hello Next JS</h1>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
