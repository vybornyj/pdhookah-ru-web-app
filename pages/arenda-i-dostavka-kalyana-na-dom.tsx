import { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from 'src/components/common/Footer'
import { RentalBlock2 } from 'src/components/RentalBlock2'

const Page: NextPage = () => (
  <div className='container'>
    <Head>
      <title>Аренда и доставка кальяна на дом</title>
    </Head>

    <RentalBlock2 />

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
