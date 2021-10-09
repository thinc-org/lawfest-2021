import { styled } from 'common/config'
import React, { useEffect, useState } from 'react'

const IMAGE_LIST = ['01.png', '02.png', '03.png']

const RootContainer = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '$black950',
})

const GameContainer = styled('div', {
  display: 'flex',
  maxWidth: '496px',
  width: '100%',
  height: '100vh',
  maxHeight: '896px',
  position: 'relative',
  transition: 'all 1s ease-in',
  '@sm': {
    width: '100vw',
    maxHeight: '100vh',
  },
})

const Image = styled('img', {
  transition: 'opacity 700ms ease-in, filter 2s ease-out',
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
    isBlur: {
      true: {
        filter: 'blur(15px)',
      },
      false: {
        filter: 'blur(0px)',
      },
    },
  },

  defaultVariants: {
    show: true,
  },
})

function PixiTesting() {
  const [now, setNow] = useState(2)

  useEffect(() => {
    let x = 0
    const now = setInterval(() => {
      setNow(x++)
      x %= IMAGE_LIST.length
    }, 3000)
    return () => {
      clearInterval(now)
    }
  }, [])

  return (
    <RootContainer>
      <GameContainer>
        {IMAGE_LIST.map((val, key) => (
          <Image
            show={key === now}
            isBlur={false}
            src={`images/${val}`}
            key={key}
            alt={val}
          ></Image>
        ))}
      </GameContainer>
    </RootContainer>
  )
}

export default PixiTesting
