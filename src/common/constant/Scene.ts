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
}

export const SCENE_LIST: { [x: string]: IScene } = {
  intro: {
    type: 'intro',
    bgType: 'color',
    bgColor: '#F1E1C7',
    nextScene: 'name-input',
    isStoredData: false,
  },
  'name-input': {
    type: 'input',
    bgType: 'color',
    bgColor: '#F1E1C7',
    nextScene: 'map',
    dataKey: 'name',
    isStoredData: true,
    question: 'คุณอยากให้เราเรียกคุณว่าอะไร ?',
  },
  map: {
    type: 'dialog',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    isStoredData: false,
    nextScene: 'map2',
    dialog: [
      {
        name: 'Hello',
        text: 'เลือกเส้นทางที่คุณต้องการจะไป',
        variant: 'primary',
      },
    ],
  },
  map2: {
    type: 'dialog',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    nextScene: 'slider',
    isStoredData: false,
    dialog: [
      {
        name: 'Hello',
        text: 'เลือกเส้นทางที่คุณต้องการจะไป',
        variant: 'secondary',
      },
    ],
  },
  slider: {
    type: 'slider',
    question: 'คุณมีความหวังเท่าไหร่แล้วล่ะ',
    bgType: 'color',
    isStoredData: true,
    dataKey: 'hope',
    nextScene: 'choice',
  },
  choice: {
    type: 'choice',
    bgType: 'color',
    isStoredData: true,
    dataKey: 'age',
    nextScene: '',
    question: '"ว่าแต่เราอายุเท่าไหร่ล่ะ ?"',
    choices: [
      {
        nextScene: 'map',
        text: '1-12 ปี',
        value: '0',
      },
      {
        nextScene: 'slider',
        text: '13-24 ปี',
        value: '1',
      },
      {
        nextScene: 'name-input',
        text: '25-40 ปี',
        value: '2',
      },
      {
        nextScene: 'map2',
        text: '41-60 ปี',
        value: '3',
      },
      {
        nextScene: 'slider',
        text: '60 ปีเป็นต้นไป',
        value: '4',
      },
    ],
  },
  'map-click': {
    type: 'image-click',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    nextScene: 'map-click',
    isStoredData: false,
  },
}

export const IMAGE_LIST = ['images/01.png']
