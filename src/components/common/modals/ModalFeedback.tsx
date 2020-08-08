import { FunctionComponent } from 'react'
import { Button1 } from 'src/components/Button1'
import { AppModal } from 'src/components/common/modals/AppModal'

interface Props {
  isOpen: boolean
  closing: () => void
}

export const ModalFeedback: FunctionComponent<Props> = ({ isOpen, closing }) => (
  <AppModal isOpen={isOpen} closing={closing} maxWidth={400}>
    <div className='modal'>
      <h2>Для обратной связи</h2>
      <h3>заполните форму</h3>
      <input type='text' placeholder='Ваше имя' />
      <input type='text' placeholder='Ваш телефон' />
      <input type='text' placeholder='Ваш email' />
      <div className='space' />
      <Button1>Заказать сейчас</Button1>
      <style jsx>{
        /* language=CSS */ `
          .modal {
            background: white;
            padding: 10px 30px 30px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          input {
            margin: 10px 0;
            padding: 5px 10px;
            border-radius: 4px;
          }
          .space {
            height: 30px;
          }
        `
      }</style>
    </div>
  </AppModal>
)
