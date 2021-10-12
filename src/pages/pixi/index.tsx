/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MainControllerProvider,
  useMainController,
} from 'common/context/Controller/MainController'
import { styled } from 'common/config'
import { IMAGE_LIST, SCENE_LIST } from 'common/constant/Scene'
import Game from 'pages/game'
import ChoiceTemplate from 'pages/game/components/Template/Choice'
import DialogueTemplate from 'pages/game/components/Template/Dialogue'
import InputScene from 'pages/game/components/Template/Input'
import SliderTemplate from 'pages/game/components/Template/Slider'
import React, { useState } from 'react'

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
  transition: 'opacity 1s ease-in, filter 2s ease-out',
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
  zIndex: -99,
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
  const { nowScene } = useMainController()

  return (
    <RootContainer>
      <GameContainer css={{ backgroundColor: SCENE_LIST[nowScene].bgColor }}>
        {/* <Game /> */}
        {/* {IMAGE_LIST.map((val, key) => (
          <Image
            show={val === SCENE_LIST[nowScene].bgImageSrc}
            isBlur={false}
            src={`images/${val}`}
            key={key}
            alt={val}
          ></Image>
        ))} */}
        {/* <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
          }}
        >
          <InputScene
            question={'กินข้าวหรือยัง ?'}
            placeholder={'ทดสอบ ทดสอบ'}
            onSubmit={(val) => {
              alert(val)
            }}
          />
          <ChoiceTemplate
            question={'สวัสดีครับบบบบบบบบบบบบบบบบบ'}
            choices={[
              {
                text: 'เราเคยรู้จักกันหรือเปล่าาาาาาาาาาาาาาาาาาาาาาาาาา',
                onClick: () => {},
                nextScene: 'Hello',
              },
              {
                text: 'เราเคยรู้จักกันหรือเปล่าาาาาาาาาาาาาาาาาาาาาาาาาา',
                onClick: () => {},
                nextScene: 'Hello',
              },
              {
                text: 'เราเคยรู้จักกันหรือเปล่าาาาาาาาาาาาาาาาาาาาาาาาาา',
                onClick: () => {},
                nextScene: 'Hello',
              },
              {
                text: 'เราเคยรู้จักกันหรือเปล่าาาาาาาาาาาาาาาาาาาาาาาาาา',
                onClick: () => {},
                nextScene: 'Hello',
              },
            ]}
          />
        </div> */}
        {/* <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
          }}
        >
          <DialogueTemplate
            dialogues={[
              { name: 'hello world', variant: 'primary', text: 'test' },
              { name: 'hello world', variant: 'secondary', text: 'Test2' },
            ]}
            onFinish={() => {}}
          />
        </div> */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
          }}
        >
          <SliderTemplate question="Hello World" onSubmit={() => {}} />
        </div>
      </GameContainer>
    </RootContainer>
  )
}

function Wrapper() {
  return (
    <MainControllerProvider>
      <PixiTesting />
    </MainControllerProvider>
  )
}

export default Wrapper
