import { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from 'src/components/common/Footer'

const Page: NextPage = () => (
  <div className='container'>
    <Head>
      <title>Кальянный кейтеринг в Москве</title>
    </Head>

    <Footer />

    <style jsx>{
      /* language=CSS */ `
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }
      `
    }</style>
  </div>
)

export default Page
