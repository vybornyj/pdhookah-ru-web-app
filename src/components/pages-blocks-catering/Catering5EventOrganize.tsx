import { FunctionComponent } from 'react'

export const Catering5EventOrganize: FunctionComponent = () => {
  return (
    <>
      <section>
        <div>
          <div className='event-organize'>
            <h2>
              <span>Организация кальянной</span>
              <br />
              зоны на мероприятии
            </h2>
            <div>
              <div>
                <p>
                  Кальянная зона – релакс уголок, в котором расположены подушки, столики для кальянов, ширмы, шторы и прочая мебель и элементы декора,
                  располагающие к релаксации и кальянокурению.
                </p>

                <p>
                  Кальянная зона оформляется в соответствии со стилистикой предстоящего мероприятия. Обратившись к нам, вы получите несколько
                  вариантов по оформлению кальянной зоны, и выберет для себя наиболее подходящий.
                </p>
              </div>

              <div>
                <img src='/images/catering/catering-hookahs-people.png ' alt='' />

                <div className='arrows'>
                  <img src='/images/catering/arrow.png' alt='' />
                  <img src='/images/catering/arrow.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .event-organize > div {
            display: flex;
            justify-content: space-between;
          }

          .event-organize > div > div:nth-child(1) {
            margin-top: 50px;
            margin-right: 65px;
          }
          .event-organize > div > div > img {
          }

          .arrows {
            text-align: right;
          }

          .arrows img {
            margin-top: 30px;
          }
          .arrows img:nth-child(2) {
            margin-left: 40px;
            transform: rotate(180deg);
          }

          .event-organize h2 {
            font-family: var(--app-font-alt);

            font-size: 40px;
            line-height: 48px;
            text-transform: uppercase;
            margin-bottom: 60px;
          }

          .event-organize h2 > span {
            color: #198fe7;
          }

          .event-organize p {
            padding: 10px 20px 10px 0;
          }

          .event-organize p > span {
            color: #198fe7;
            font-weight: bold;
            text-decoration: underline;
          }

          .event-organize h3 {
            font-family: var(--app-font-alt);

            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 50px 0 10px;
            font-size: 20px;
            line-height: 28px;
          }

          .event-organize h3 > span {
            background: var(--app-gradient-gold);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .event-organize p:last-of-type {
            margin-bottom: 40px;
          }
        `
      }</style>
    </>
  )
}
