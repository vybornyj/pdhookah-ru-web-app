import getConfig from 'next/config'
import { FunctionComponent, useState } from 'react'
import { ModalFeedback } from 'src/components/common/modals/ModalFeedback'
import { SvgLogo } from 'src/components/common/svgs/SvgLogo'

const {
  publicRuntimeConfig: { PHONE_VIEW, PHONE_LINK }
} = getConfig()

export const TemplateHeaderTopLine: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <ModalFeedback isOpen={isModalOpen} closing={() => setIsModalOpen(false)} />

      <div className='root'>
        <div>
          <SvgLogo />
          <div className='text'>
            Кальянный кейтеринг. <br />
            Заказ и аренда кальянов.
          </div>
        </div>

        <div>
          <a href={`tel:${PHONE_LINK}`}>{PHONE_VIEW}</a>

          <div className='callback' onClick={() => setIsModalOpen(true)}>
            Заказать обратный звонок
          </div>
        </div>

        <style jsx>{
          /* language=CSS */ `
            .root {
              z-index: 1;
              display: flex;
              flex-direction: column;
              padding: 15px 0;
              text-align: center;
            }

            @media screen and (min-width: 1024px) {
              .root {
                flex-direction: row;
                justify-content: space-between;
                margin: 0 100px 0 0;
              }
            }

            .text {
              margin-top: -30px;

              font-size: 14px;
              line-height: 16px;
              text-align: center;
            }

            a {
              display: block;
              margin-top: 20px;
              font-weight: bold;
              font-size: 20px;
              font-family: var(--app-font-alt);
            }

            .callback {
              margin-top: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 18px;
            }
          `
        }</style>
      </div>
    </>
  )
}
