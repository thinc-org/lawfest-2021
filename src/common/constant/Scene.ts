import { IDialogueData } from 'pages/game/components/Template/Dialogue/types'
import { IChoice } from 'pages/game/components/Template/Choice/types'

export interface IScene {
  type: string
  bgType: 'color' | 'image'
  isStoredData: boolean
  nextScene: string
  bgColor?: string
  placeholder?: string
  bgImageSrc?: string
  dataKey?: string
  dialog?: IDialogueData[]
  question?: string
  choices?: IChoice[]
  fadeIn?: string[]
  fadeOut?: string[]
  onSubmit?: (...args: any[]) => void
}

export const SCENE_LIST: { [x: string]: IScene } = {
  intro: {
    type: 'intro',
    bgType: 'color',
    bgColor: '#F1E1C7',
    nextScene: 'name-input',
    isStoredData: false,
    fadeOut: ['fade'],
  },
  'name-input': {
    type: 'input',
    bgType: 'color',
    bgColor: '#F1E1C7',
    nextScene: 'map',
    dataKey: 'name',
    isStoredData: true,
    question: 'คุณอยากให้เราเรียกคุณว่าอะไร ?',
    fadeIn: ['fade'],
    fadeOut: ['fade'],
    onSubmit(val) {
      console.log(val)
    },
  },
  map: {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'images/01.png',
    nextScene: 'map-click',
    dialog: [
      {
        name: 'Hello',
        text: 'เลือกเส้นทางที่คุณต้องการจะไป',
        variant: 'secondary',
      },
      {
        name: 'World',
        text: 'อยากตาย ;-;',
        variant: 'primary',
      },
    ],
    isStoredData: false,
  },
  'map-click': {
    type: 'image-click',
    bgType: 'image',
    bgImageSrc: 'images/01.png',
    nextScene: 'map-click',
    isStoredData: false,
  },
}

export const IMAGE_LIST = ['images/01.png']
