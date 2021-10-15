import { useCallback, useEffect, useState } from 'react'

const useTextAnimation = (originalText: string, onClick?: () => void) => {
  const [index, setIndex] = useState(0)
  const [textInterval, setTextInterval] = useState<NodeJS.Timeout | null>(null)
  const [currentText, setCurrentText] = useState(originalText)

  useEffect(() => {
    setIndex(0)
    setCurrentText(originalText)
    let pos = 0
    const interval = setInterval(() => {
      if (pos >= originalText.length) {
        clearInterval(interval)
        setTextInterval(null)
      } else {
        setIndex((index) => index + 1)
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
      setIndex(originalText.length)
    } else {
      if (onClick) onClick()
    }
  }, [originalText, onClick, textInterval])

  return { index, onDialogueClick, isChanging: currentText !== originalText }
}

export default useTextAnimation
