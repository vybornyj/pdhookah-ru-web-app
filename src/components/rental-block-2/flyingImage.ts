type FlyingImage = (
  image: string,
  coords: {
    top: number
    left: number
    width: number
    height: number
    key: number
  }
) => void

export const FlyingImage2: FlyingImage = (image, { top, left, width, height }) => {
  const id = String(new Date().getTime())

  const el = document.createElement('img')
  el.src = image
  el.alt = ''
  el.id = id
  el.style.zIndex = '999'
  el.style.position = 'fixed'
  el.style.top = `${top}px`
  el.style.left = `${left}px`
  el.style.width = `${width}px`
  el.style.height = `${height}px`
  el.style.transition = '0.75s all ease-in-out'
  document.body.appendChild(el)

  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      el.style.top = `${document.documentElement.offsetHeight - 105}px`
      el.style.left = `${document.documentElement.offsetWidth - 125}px`
      el.style.width = '50px'
      el.style.height = '50px'
    }
  }, 10)

  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) document.body.removeChild(el)
  }, 760)
}
