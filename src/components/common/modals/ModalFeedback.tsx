import { FunctionComponent, useEffect, useState } from 'react'
import { Button1 } from 'src/components/Button1'
import { AppModal } from 'src/components/common/modals/AppModal'

interface Props {
  isOpen: boolean
  closing: () => void
}

export const ModalFeedback: FunctionComponent<Props> = ({ isOpen, closing }) => {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(true)
    // todo: отправить email
  }

  useEffect(() => {
    if (isOpen === false) setTimeout(() => setSubmit(false), 250)
  }, [isOpen])

  return (
    <AppModal
      isOpen={isOpen}
      closing={() => {
        closing()
      }}
      maxWidth={400}
    >
      <div className='modal'>
        {submit ? (
          <>
            <h2 className='color-blue'>Спасибо, ваша заявка принята!</h2>
            <h2 className='color-white'>Мы свяжемся с вами в ближайшее время!</h2>
          </>
        ) : (
          <>
            <h2>Для обратной связи</h2>
            <h3>заполните форму</h3>
            <input type='text' placeholder='Ваше имя' />
            <input type='text' placeholder='Ваш телефон' />
            <input type='text' placeholder='Ваш email' />
            <div className='space' />
            <Button1 onClick={() => handleSubmit()}>Заказать сейчас</Button1>
          </>
        )}

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
              color: white;
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
}
