import { useCallback } from 'react'

const useCarouselText = (text: string | string[]) => {
  const textArray = Array.isArray(text) ? text : text.split('\n')

  const getTextStyle = useCallback((text) => {
    let bold = false
    let center = false
    while (true) {
      let change = false

      //bold
      if (text.slice(0, 6) === '<bold>') {
        text = text.slice(6)
        change = bold = true
      }

      //center
      if (text.slice(0, 8) === '<center>') {
        text = text.slice(8)
        change = center = true
      }

      if (!change) break
    }

    return { text, center, bold }
  }, [])

  return textArray.map((line) => {
    return getTextStyle(line)
  })
}

export default useCarouselText
