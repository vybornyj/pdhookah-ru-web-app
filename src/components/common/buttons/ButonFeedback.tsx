import { useState } from 'react'
import { Button1 } from 'src/components/Button1'
import { ModalFeedback } from 'src/components/common/modals/ModalFeedback'

export const ButtonFeedback = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <ModalFeedback isOpen={modalIsOpen} closing={() => setModalIsOpen(false)} />
      <Button1 onClick={() => setModalIsOpen(true)}>Заказать обратный звонок</Button1>
    </>
  )
}
