import { FunctionComponent } from 'react'

const images = [
  {
    src: '/images/main/vkontakte.png',
    title: 'Вконтакте'
  },
  {
    src: '/images/main/instagram.png',
    title: 'Instagram'
  },
  {
    src: '/images/main/facebook.png',
    title: 'Facebook'
  }
]

interface Props {
  className?: 'in-header' | 'in-footer'
}

export const TemplateHeaderSocialLinks: FunctionComponent<Props> = ({ className = 'in-header' }) => {
  return (
    <div className={`root ${className}`}>
      {images.map(({ src, title }) => (
        <div className='item' key={src}>
          <div className='img'>
            <img src={src} alt={title} />
          </div>
          <span>{title}</span>
        </div>
      ))}

      <style jsx>{
        /* language=CSS */ `
          .root {
            text-transform: uppercase;
            font-family: Noto Sans, serif;

            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .item {
            display: flex;
            align-items: center;
            padding: 20px;
            cursor: pointer;
            border-radius: 12px;
          }

          .item:hover {
            background: hsla(0, 0%, 0%, 0.5);
          }

          .img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--app-gradient-gold);
          }

          span {
            margin-left: 20px;
            font-size: 18px;
          }

          @media screen and (min-width: 1440px) {
            .root.in-header {
              padding: 0;
              top: -59px;
              left: -190px;
              position: absolute;
              display: flex;
              flex-direction: column;
            }

            .root.in-header .item {
              transform: rotate(-90deg);
              margin: 60px 0;
            }

            .root.in-header img {
              transform: rotate(90deg);
            }
          }
        `
      }</style>
    </div>
  )
}
