import React, { useState } from 'react'
import {
  BottomLeftInk,
  BottomRightInk,
  LogoContainer,
  LogoImage,
  MainBlueInk,
  TopLeftInk,
} from './styled'
import Logo from 'assets/logo.svg'
import { useMainController } from 'common/context/Controller/MainController'
import { SCENE } from 'common/constant/Scene'
import BlueInk from 'assets/blue_ink.svg'
import OrangeInk from 'assets/orange_ink.svg'
import YellowInk from 'assets/yellow_ink.svg'

function Intro() {
  const [state, setState] = useState(0)
  const { handleSetNowScene, nowScene } = useMainController()

  return (
    <LogoContainer
      css={{ overflow: 'hidden' }}
      show={nowScene === 'intro' ? 'open' : 'close'}
    >
      <LogoImage
        show={state >= 2 ? 'open' : 'close'}
        src={Logo}
        alt="logo"
        onTransitionEnd={() => {
          window.setTimeout(
            () => handleSetNowScene(SCENE['intro'].nextScene),
            800
          )
        }}
      ></LogoImage>
      <TopLeftInk src={YellowInk} alt="orange" />
      {state >= 1 && (
        <MainBlueInk
          src={BlueInk}
          alt="main_blue"
          onAnimationEnd={() => setState(state + 1)}
        />
      )}
      <BottomRightInk
        src={BlueInk}
        alt="blue"
        onAnimationEnd={() => {
          setState(state + 1)
        }}
      />
      <BottomLeftInk src={YellowInk} alt="yellow" />
      {/* <canvas ref={canvasRef} width="496" height="896"></canvas> */}
    </LogoContainer>
  )
}

export default Intro
