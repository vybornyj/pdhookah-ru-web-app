import Link from 'next/link'
import { useState } from 'react'
import { ModalFeedback } from 'src/components/common/modals/ModalFeedback'
import { SvgLogo } from 'src/components/common/SvgLogo'

export const TopLine = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className='top-line'>
      <ModalFeedback isOpen={modalIsOpen} closing={() => setModalIsOpen(false)} />
      <div className='logo'>
        <Link href='/'>
          <a>
            <SvgLogo />
          </a>
        </Link>
        <div className='logo-text'>
          Кальянный кейтеринг. <br />
          Заказ и аренда кальянов.
        </div>
      </div>
      <div className='phone'>
        <div className='phone-number'>
          <a href='tel:+79255554466'>+ 7 (925) 355-00-53</a>
        </div>
        <div className='phone-callback' onClick={() => setModalIsOpen(true)}>
          Заказать обратный звонок
        </div>
      </div>
      <style jsx>{
        /* language=CSS */ `
          .phone-callback {
            cursor: pointer;
          }
        `
      }</style>
    </div>
  )
}
