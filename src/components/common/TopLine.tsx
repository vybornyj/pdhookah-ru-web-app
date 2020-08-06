import Link from 'next/link'
import { SvgLogo } from 'src/components/common/SvgLogo'

export const TopLine = () => {
  return (
    <>
      <div className='top-line'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <SvgLogo />
            </a>
          </Link>
          <div className='logo-text'>
            Кальянный кейтеринг. <br />
            Заказ и аренда кальянов.
          </div>
        </div>
        <div className='phone'>
          <div className='phone-number'>
            <a href='tel:+79255554466'>+ 7 (925) 355-00-53</a>
          </div>
          <div className='phone-callback'>
            <a href='#'>Заказать обратный звонок</a>
          </div>
        </div>
      </div>
    </>
  )
}
