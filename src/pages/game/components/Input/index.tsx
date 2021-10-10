import StyledInput from 'common/components/TextInput'
import { StyledText } from 'common/components/Typography'
import Button from 'common/components/Button'
import React, { useEffect, useState } from 'react'

function InputScene(props: any) {
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput('')
  }, [])

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '400px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledText variant="h5" css={{ paddingBottom: '10px' }}>
          XXXX
        </StyledText>
        <StyledInput
          css={{ marginBottom: '20px' }}
          value={input}
          onChange={(el) => setInput(el.currentTarget.value)}
        ></StyledInput>
        <Button
          variant="secondary"
          css={{ maxWidth: '200px', display: !!input ? 'block' : 'none' }}
        >
          ตกลง
        </Button>
      </div>
    </div>
  )
}

export default InputScene
