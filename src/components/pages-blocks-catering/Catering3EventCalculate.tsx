import { FunctionComponent, useEffect, useState } from 'react'
import { AppButton } from 'src/components/common/buttons/AppButton'
import { ModalContactShortly } from 'src/components/common/modals/ModalContactShortly'
import { hotReplacerOnlyDigits, hotReplacerPhone } from 'src/scripts/hotReplacers'

const options = ['Классическая', 'Грейпфрут', 'Помело', 'Ананас', 'Дыня']

export const Catering3EventCalculate: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('Классическая чаша')
  const [value5, setValue5] = useState('')
  const [submitError, setSubmitError] = useState(false)
  const handleSetValue1 = (value: string) => setValue1(hotReplacerOnlyDigits(value, 2))
  const handleSetValue2 = (value: string) => setValue2(hotReplacerOnlyDigits(value, 2))
  const handleSetValue3 = (value: string) => setValue3(hotReplacerOnlyDigits(value, 2))
  const handleSetValue5 = (value: string) => setValue5(hotReplacerPhone(value))
  const setDefaultState = () => {
    setValue1('')
    setValue2('')
    setValue3('')
    setValue4('Классическая чаша')
    setValue5('')
  }
  useEffect(() => {
    if (submitError && value1 && value2 && value3 && value5) setSubmitError(false)
  }, [value1, value2, value3, value5])

  const handleSubmit = () => {
    if (value1 && value2 && value3 && value5) {
      setIsModalOpen(true)
      // todo: отправить email
      setDefaultState()
      setSubmitError(false)
    } else {
      setSubmitError(true)
    }
  }

  return (
    <>
      <ModalContactShortly isOpen={isModalOpen} closing={() => setIsModalOpen(false)} />
      <section id='anchor' className='event-calculate'>
        <div>
          <h2>
            <span> Калькулятор</span> мероприятия:
          </h2>
          <div className='event-calculate-form'>
            <div>
              <div className='first'>
                <img src='/images/catering/01gold.png' alt='' />
                <div>На мероприятие требуется</div>
                <div className='column767-row768'>
                  <div>
                    <input type='text' placeholder='20' value={value1} onChange={(event) => handleSetValue1(event.target.value)} />
                    Кальянов
                  </div>
                  <div>
                    <input type='text' value={value2} onChange={(event) => handleSetValue2(event.target.value)} />
                    Кальянщиков на
                  </div>
                  <div>
                    <input type='text' value={value3} onChange={(event) => handleSetValue3(event.target.value)} />
                    Часов
                  </div>
                </div>
              </div>
              <div className='second-third'>
                <div className='second'>
                  <img src='/images/catering/02gold.png' alt='' />
                  <div>Чаша кальяна</div>
                  <select value={value4} onChange={(event) => setValue4(event.target.value)}>
                    {options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='third'>
                  <img src='/images/catering/03gold.png' alt='' />
                  <div>Мой контактный телефон</div>
                  <input type='phone' placeholder='Ваш телефон' value={value5} onChange={(event) => handleSetValue5(event.target.value)} />
                </div>
              </div>
              <h3>{submitError ? 'Заполните все поля' : ''}</h3>
              <AppButton onClick={handleSubmit}>Заказать индивидуальный рассчет</AppButton>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          h3 {
            display: block;
            height: 30px;
            margin: 10px 0;
          }
          input,
          select {
            text-align: center;
            color: white;
            border: 1px solid hsl(0, 0%, 40%);
            border-radius: 4px;
          }

          input[type='phone'],
          select {
            width: 250px;
            height: 48px;
          }

          input[type='text'] {
            width: 42px;
            height: 38px;
            margin-right: 20px;
          }

          select {
            padding: 0 0 0 18px;
            border-color: darkgoldenrod;
            cursor: pointer;
          }

          input::placeholder {
            color: hsl(0, 0%, 40%);
            opacity: 1;
          }

          option {
            background: hsl(224, 26%, 8%);
            padding: 8px 4px;
            cursor: pointer;
          }

          .event-calculate h2 {
            font-family: var(--app-font-alt);

            font-size: 40px;
            line-height: 48px;
            text-transform: uppercase;
            margin-bottom: 60px;
          }

          .event-calculate h2 > span {
            color: #198fe7;
          }

          .event-calculate-form > div {
            width: 770px;
            margin: auto;
            border: 10px solid darkgoldenrod;
            padding: 50px 100px;
            filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.2));
            border-radius: 5px;
            text-align: center;
          }

          .event-calculate-form > div > div {
            text-align: left;
          }

          .event-calculate-form > div > div:not(.first) {
            margin-bottom: 30px;
          }

          .first > div,
          .second-third > div > div {
            margin: 20px 0;
          }

          .first > div > div {
            margin-right: 20px;
          }

          .event-calculate-form > div > div > div:not(1) {
            display: flex;
            margin: 20px 0;
            flex-direction: column;
          }

          .first > div {
            display: flex;
            flex-direction: row;
          }

          .second-third {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .event-calculate-form img {
            width: 60px;
          }
        `
      }</style>
    </>
  )
}
