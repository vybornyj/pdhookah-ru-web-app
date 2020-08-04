import React, { FunctionComponent } from 'react'
import { Button1 } from 'src/components/Button1'

export const RentalBlock2: FunctionComponent = () => (
  <section className='configure'>
    <div className='container'>
      <div className='configure-hookah'>
        <h2>
          Собери <span>свой кальян:</span>
        </h2>
        <div className='order-options'>
          <div>Кальян</div>
          <div>Чаща</div>
          <div>Табак</div>
          <div>Вкус</div>
          <div>Дополнительно</div>
        </div>
        <div className='hookah-variant'>
          <div>Классический</div>
          <div>Дизайнерские</div>
        </div>

        <div className='order-info'>
          <h3>При заказе кальяна вы получаете кальянный набор:</h3>
          <div className='hookah-kit'>
            <div className='hookah-kit-col'>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Кальян</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Плитка для углей</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Одноразовые мундштуки</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Табак</div>
              </div>
            </div>
            <div className='hookah-kit-col'>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Щипчики</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Угли</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Чаша</div>
              </div>
              <div>
                <img src='/assets/images/hookah-item.jpg' alt='' />
                <div>
                  Жидкость на выбор: <br /> молоко, алкоголь коктейль...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='make-call-order'>
        <div>
          <h3>Не можете выбрать?</h3>
          <p>
            Просто позвоните нам, и мы соберем <br /> для вас кальян!
          </p>
          <div className='make-call-order-phone'>
            <img src='/assets/images/hookah-item.jpg' alt='' />
            +7 (925) 355-00-53
          </div>
        </div>
        <div className='order-result'>
          <div className='order-container'>
            <div>
              <span>Заказ на сумму:</span>
              <span className='price'>5000</span>
            </div>
            <Button1>Заказать кальян</Button1>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{
      /* language=CSS */ `
        section {
          background: #10131c;
          margin: auto;
          width: 1200px;
        }

        section.configure {
          margin-top: 50px;
          margin-left: 525px;
          margin-bottom: 100px;
        }

        section.configure > .container {
          margin: auto;
        }

        section.configure h2 {
          font-weight: bold;
          font-size: 40px;
        }

        section.configure h2 > span {
          color: steelblue;
        }

        .configure-hookah {
          margin: auto;
          width: 900px;
          padding: 0 50px;
        }

        .order-options {
          margin-top: 40px;
          display: flex;
        }

        .hookah-kit {
          display: flex;
        }

        .hookah-kit-col:nth-child(1) {
          margin-right: 50px;
        }

        .hookah-kit-col > div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .hookah-kit-col > div > img {
          margin-right: 10px;
        }

        .hookah-kit > div {
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        .hookah-kit > div > div {
          padding: 10px 0;
        }

        .order-options > div {
          margin-right: 30px;
          border-radius: 10px;
          padding: 10px 25px;
          text-transform: uppercase;
        }

        .order-options > div:nth-child(1) {
          border: 1px solid darkgoldenrod;
          color: darkgoldenrod;
        }

        .hookah-variant {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }

        .hookah-variant > div {
          width: 150px;
          height: 250px;
          background: #16354e;
          margin: 0 10px;
          text-align: center;
        }

        .order-info {
          margin-top: 30px;
        }

        .make-call-order {
          margin-top: 50px;
          display: flex;
          justify-content: center;
        }

        .make-call-order > div:nth-child(1) {
          border-right: 1px white solid;
          padding-right: 60px;
          margin-left: 50px;
        }

        .make-call-order h3 {
          width: 390px;
          font-size: 28px;
          margin: 0;
        }

        .make-call-order p {
          font-size: 18px;
        }

        .make-call-order-phone {
          font-size: 26px;
          font-weight: bold;
        }

        .make-call-order-phone > img {
          width: 36px;
          margin-right: 14px;
        }

        .order-result {
          margin-left: 50px;
          display: flex;
          align-items: center;
        }

        .order-container {
        }

        .order-container > div:nth-child(1) {
          display: flex;
          align-items: center;
        }

        .order-container .price {
          margin-left: 20px;
          font-weight: bold;
          font-size: 24px;
        }

        .open-cart {
          width: 300px;
          margin-top: 20px;
        }
      `
    }</style>
  </section>
)
