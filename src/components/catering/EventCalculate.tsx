import { Button1 } from 'src/components/Button1'

export const EventCalculate = () => {
  return (
    <>
      <section className='event-calculate'>
        <div className='container'>
          <h2>
            <span> Калькулятор</span> мероприятия:
          </h2>
          <div className='event-calculate-form'>
            <div>
              <div className='first'>
                <img src='/assets/images/catering/01gold.png' alt='' />
                <div>На мероприятие требуется</div>
                <div>
                  <div>
                    <input type='text' name='hookahs' placeholder='20' />
                    Кальянов
                  </div>
                  <div>
                    <input type='text' name='staff' /> Кальянщиков на
                  </div>
                  <div>
                    <input type='text' name='hours' /> Часов
                  </div>
                </div>
              </div>
              <div className='second-third'>
                <div className='second'>
                  <img src='/assets/images/catering/02gold.png' alt='' /> <div>Кальян должен быть на:</div>
                  <select name='' id=''>
                    <option value='default'> Обычных чашах</option>
                  </select>
                </div>
                <div className='third'>
                  <img src='/assets/images/catering/03gold.png' alt='' /> <div>Мой контактный телефон</div>
                  <input type='phone' placeholder='Ваш телефон' />
                </div>
              </div>
              <Button1>Заказать индивидуальный рассчет</Button1>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .event-calculate h2 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 48px;
            text-transform: uppercase;
            margin-bottom: 60px;
          }

          .event-calculate h2 > span {
            color: #198fe7;
          }
          .event-calculate-form {
            width: 1200px;
            padding: 0 10px 0 25px;
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
            margin-bottom: 50px;
          }

          .event-calculate-form > div > div:not(.first) {
            margin-bottom: 80px;
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

          .first input[type='text'] {
            width: 40px;
            margin-right: 20px;
            opacity: 0.2;
            border-radius: 5px;
          }

          select {
            border: 1px solid darkgoldenrod;
            border-radius: 5px;
            width: 310px;
            height: 47px;
            margin-right: 40px;
          }

          .third input {
            height: 47px;
            width: 237px;
            opacity: 0.2;
            border-radius: 5px;
          }
        `
      }</style>
    </>
  )
}
