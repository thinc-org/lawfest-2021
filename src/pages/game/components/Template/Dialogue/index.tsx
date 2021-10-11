import React, { useCallback, useState } from 'react'
import Dialogue from '../../Dialogue'
import { RootContainer } from '../Input/styled'
import { IDialogueTemplate } from './types'

function DialogueTemplate(props: IDialogueTemplate) {
  const { dialogues } = props
  const [now, setNow] = useState(0)

  const handleChange = useCallback(() => {
    setNow((now + 1) % dialogues.length)
  }, [now, dialogues])

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
          children={dialogues[now].text}
          variant={dialogues[now].variant}
          onClick={handleChange}
          name={dialogues[now].name}
        />
      </div>
    </RootContainer>
  )
}

export default DialogueTemplate
