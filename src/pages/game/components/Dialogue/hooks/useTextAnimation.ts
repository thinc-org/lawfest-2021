import { useCallback, useEffect, useState } from 'react'

const useTextAnimation = (originalText: string, onClick?: () => void) => {
  const [text, setText] = useState('')
  const [playingAnimation, setPlayingAnimation] = useState(true)

  useEffect(() => {
    const showText = async () => {
      for (let i = 0; i < originalText.length; i++) {
        setText((text) =>
          text.length < originalText.length
            ? text + originalText[i]
            : originalText
        )
        await new Promise((resolve) => setTimeout(resolve, 50))
      }
      setText(originalText)
    }
    showText()
  }, [originalText])

  const onDialogueClick = useCallback(() => {
    if (playingAnimation) {
      setPlayingAnimation(false)
      setText(originalText)
    } else {
      if (onClick) onClick()
    }
  }, [originalText, onClick, playingAnimation])

  return { text, onDialogueClick }
}

export default useTextAnimation
