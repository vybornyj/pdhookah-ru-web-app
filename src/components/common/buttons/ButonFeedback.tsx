import { FunctionComponent, useState } from 'react'
import { AppButton } from 'src/components/common/buttons/AppButton'
import { ModalFeedback } from 'src/components/common/modals/ModalFeedback'

export const ButtonFeedback: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ModalFeedback isOpen={isModalOpen} closing={() => setIsModalOpen(false)} />
      <AppButton onClick={() => setIsModalOpen(true)}>Заказать обратный звонок</AppButton>
    </>
  )
}
