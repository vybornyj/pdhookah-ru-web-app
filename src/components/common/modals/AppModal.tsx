import { FunctionComponent, MouseEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  isOpen?: boolean
  closing?: (event?: MouseEvent) => void
  maxWidth?: number
}

export const AppModal: FunctionComponent<Props> = ({ isOpen, closing, children, maxWidth = 700 }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>()
  const [timeoutId, setTimeoutId] = useState(0)
  const [timeoutId2, setTimeoutId2] = useState(0)
  const [timeoutId3, setTimeoutId3] = useState(0)
  const [opened, setOpened] = useState(isOpen)
  const [displayed, setDisplayed] = useState(isOpen)
  const [ended, setEnded] = useState(isOpen)

  useEffect(() => {
    const div = document.createElement('div')
    div.id = `_modal_${String(new Date().getTime())}`
    document.body.appendChild(div)
    setContainer(div)

    return () => div.remove()
  }, [])

  const clearTimeouts = () => {
    clearTimeout(timeoutId)
    clearTimeout(timeoutId2)
    clearTimeout(timeoutId3)
  }

  useEffect(() => {
    clearTimeouts()

    setTimeoutId(Number(setTimeout(() => setOpened(isOpen), 50)))
    setTimeoutId2(Number(setTimeout(() => setDisplayed(isOpen), isOpen ? 0 : 250)))
    setTimeoutId3(Number(setTimeout(() => setEnded(isOpen), isOpen ? 250 : 0)))

    return () => clearTimeouts()
  }, [isOpen])

  if (!container) return null
  return createPortal(
    <div className={`AppModal ${displayed}`}>
      <div className={`background ${opened}`} />
      <div className='scrollable' onClick={closing} role='link' tabIndex={0}>
        <div className={`modal ${opened}`} onClick={event => event.stopPropagation()} role='link' tabIndex={0}>
          {children}
        </div>
      </div>

      <style jsx global>{
        /* language=CSS */ `
          body {
            ${displayed ? 'overflow: hidden;' : ''};
          }

          #__next {
            ${ended ? 'transition: var(--app-transition); filter: blur(3px);' : ''};
          }
        `
      }</style>

      <style jsx>{
        /* language=CSS */ `
          .AppModal {
            transition: var(--app-transition);
            display: block;
          }

          .AppModal.false {
            display: none;
          }

          .background {
            z-index: 40;
            position: fixed;
            top: 0;
            right: 0;
            bottom: -100px; /* чтобы в мобильных под фоном не было белого отступа, из-за плавующей адресной строки */
            left: 0;

            /*https://www.svgbackgrounds.com/#liquid-cheese*/
            background-color: hsl(0, 0%, 0%);

            transition: var(--app-transition);
            opacity: 0;
          }

          .background.true {
            opacity: 0.8;
          }

          .scrollable {
            z-index: 41;
            position: fixed;
            top: 0;
            right: 0;
            bottom: -100px;
            left: 0;

            overflow: hidden auto;
            cursor: pointer;
          }

          .modal {
            width: 100%;
            max-width: ${maxWidth}px;
            cursor: initial;

            transition: var(--app-transition);
            margin: 0 auto 200px auto;
            opacity: 0;
          }

          .modal.true {
            margin-top: 100px;
            opacity: 1;
          }
        `
      }</style>
    </div>,
    container
  )
}
