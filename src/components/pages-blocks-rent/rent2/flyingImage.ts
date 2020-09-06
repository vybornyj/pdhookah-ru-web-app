type flyingImage = (
  image: string,
  coords: {
    top: number
    left: number
    width: number
    height: number
    key: number
  }
) => void

export const flyingImage: flyingImage = (image, { top, left, width, height }) => {
  const id = String(new Date().getTime())

  const timeStart = 10
  const timeDuration = 750
  const timeEnd = timeStart + timeDuration
  const endTop = document.documentElement.clientHeight - 105
  const endLeft = document.documentElement.clientWidth - 125

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
  el.style.transition = `${timeDuration}ms all ease-in-out`
  document.body.appendChild(el)

  setTimeout(() => {
    el.style.top = `${endTop}px`
    el.style.left = `${endLeft}px`
    el.style.width = '50px'
    el.style.height = '50px'
  }, timeStart)

  setTimeout(() => {
    el.remove()
  }, timeEnd)
}
