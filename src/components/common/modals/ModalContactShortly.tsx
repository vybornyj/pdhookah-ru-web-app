import { FunctionComponent } from 'react'
import { AppModal } from 'src/components/common/modals/AppModal'

interface Props {
  isOpen: boolean
  closing: () => void
}

export const ModalContactShortly: FunctionComponent<Props> = ({ isOpen, closing }) => (
  <AppModal isOpen={isOpen} closing={closing} maxWidth={400}>
    <div className='modal'>
      <h2 className='color-blue'>Спасибо, ваша заявка принята!</h2>
      <h2 className='color-white'>Мы свяжемся с вами в ближайшее время!</h2>
      <style jsx>{
        /* language=CSS */ `
          .modal {
            background: hsl(224, 26%, 8%);
            border-radius: 5px;
            border: 10px solid goldenrod;
            padding: 10px 30px 30px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .color-blue {
            color: #198fe7;
          }

          .color-white {
            color: white;
          }

          h2 {
            font-family: var(--app-font-alt);
          }
        `
      }</style>
    </div>
  </AppModal>
)
