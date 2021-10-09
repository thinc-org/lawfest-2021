import { useCallback, useEffect, useState } from 'react'

const useTextAnimation = (originalText: string, onClick?: () => void) => {
  const [text, setText] = useState('')
  const [textInterval, setTextInterval] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setText('')
    let pos = 0
    const interval = setInterval(() => {
      if (pos >= originalText.length) {
        clearInterval(interval)
        setTextInterval(null)
      } else {
        setText((text) => text + originalText[pos])
        pos++
      }
    }, 50)
    setTextInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [originalText])

  const onDialogueClick = useCallback(() => {
    if (textInterval) {
      clearInterval(textInterval)
      setTextInterval(null)
      setText(originalText)
    } else {
      if (onClick) onClick()
    }
  }, [originalText, onClick, textInterval])

  return { text, onDialogueClick }
}

export default useTextAnimation
