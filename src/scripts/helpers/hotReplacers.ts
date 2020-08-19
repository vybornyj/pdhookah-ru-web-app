export const hotReplacerRuEn = (string: string) => {
  return string.length > 0 && string[0] !== ' '
    ? string
        .replace(/[^\-‐‑‒–—―`!?@#$%^&*()+№:=<>{}'",. 0-9А-ЯЁа-яёA-Za-z]/g, '')
        .replace(/[-‐‑‒–—―]/g, '–')
        .replace(/ {2,}/g, ' ')
    : ''
}

export const hotReplacerOnlyDigits = (s: string, max = 99) => String(Number(s.replace(/[^0-9]/g, '').slice(0, max)) || '')
export const hotReplacerPhone = (s: string) => `${s[0] === '+' ? '+' : ''}${Number(s.slice(s[0] === '+' ? 1 : 0, 16).replace(/[^0-9]/g, '')) || ''}`
