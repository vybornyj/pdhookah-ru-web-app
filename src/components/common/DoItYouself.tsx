import { useState } from 'react'
import { Button1 } from 'src/components/Button1'
import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'
import { ModalInstruction3 } from 'src/components/common/modals/ModalInstruction3'

export const DoItYourself = () => {
  const [modal3isOpen, setModal3isOpen] = useState(false)
  return (
    <>
      <ModalInstruction3 isOpen={modal3isOpen} closing={() => setModal3isOpen(false)} />
      <section>
        <div className='container-do-it-yourself'>
          <div className='make-call-order'>
            <div>
              <h3>
                Как сделать кальян. <span> Пошаговое руководство от эксперта.</span>
              </h3>

              <Button1 onClick={() => setModal3isOpen(true)} variant='yellow'>
                Посмотреть руководство
              </Button1>
            </div>
            <div className='order-result'>
              <div className='order-container'>
                <div className='step-by-step'>
                  <span>
                    Закажите обратный звонок, и <br /> наш специалист соберет для <br /> вас идеальный кальян!
                  </span>
                </div>
                <ButtonFeedback />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          .container-do-it-yourself {
            width: 1200px;
            margin: 50px 5px;
            padding: 20px 0;
          }

          .make-call-order {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            width: 62%;
            padding: 0 15px 40px 0;
          }

          .make-call-order > div:nth-child(1) span {
            background: linear-gradient(238.8deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .make-call-order > div:nth-child(2) {
            width: 38%;
          }

          .make-call-order h3 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 35px;
            line-height: 60px;
            text-transform: uppercase;
          }

          .make-call-order p {
            font-family: var(--app-font);
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            display: flex;
            align-items: center;
            padding: 10px 0;
          }

          .make-call-order-phone {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 51px;
          }

          .make-call-order-phone > img {
            width: 36px;
            margin-right: 14px;
          }

          .order-result {
            padding-left: 60px;
            display: flex;
            align-items: center;
          }

          .order-container > div {
            height: 200px;
            margin-bottom: 30px;
          }
          .order-container > div > span {
            font-family: var(--app-font);
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
          }

          .order-container > div:nth-child(1) {
            display: flex;
            align-items: center;
          }
        `
      }</style>
    </>
  )
}
