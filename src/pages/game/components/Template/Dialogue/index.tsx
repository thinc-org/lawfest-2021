import React, { useCallback, useEffect, useState } from 'react'
import Dialogue from '../../Dialogue'
import { RootContainer } from '../Container'
import { IDialogueTemplate } from './types'

function DialogueTemplate(props: IDialogueTemplate) {
  const { dialogues, onFinish } = props
  const [now, setNow] = useState(0)

  const handleChange = useCallback(() => {
    if (now === dialogues.length - 1) {
      onFinish({})
      return
    }
    setNow(now + 1)
  }, [now, dialogues.length, onFinish])

  useEffect(() => {
    setNow(0)
  }, [dialogues])

  return (
    <RootContainer css={{ alignItems: 'flex-end' }}>
      <div
        style={{
          width: '100%',
          paddingBottom: '80px',
          display: 'flex',
          justifyContent: 'center',
          background:
            'linear-gradient(0deg, #292929 0%, rgba(41, 41, 41, 0) 100%)',
        }}
      >
        <Dialogue
          children={dialogues[Math.min(now, dialogues.length - 1)].text}
          variant={dialogues[Math.min(now, dialogues.length - 1)].variant}
          onClick={handleChange}
          name={dialogues[Math.min(now, dialogues.length - 1)].name}
        />
      </div>
    </RootContainer>
  )
}

export default DialogueTemplate
