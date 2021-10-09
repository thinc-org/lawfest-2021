interface IQuestion {
  topic: string
}

interface IChoice {
  text: string
  value: any
}

interface IScene {
  type: string
  bgType: 'color' | 'image'
  isStoredData: boolean
  nextScene: string
  bgColor?: string
  bgImageSrc?: string
  dataKey?: string
  dialog?: string[]
  question?: IQuestion
  choices?: IChoice[]
  fadeIn?: string[]
  fadeOut?: string[]
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
    question: { topic: 'คุณอยากให้เราเรียกคุณว่าอะไร ?' },
    fadeIn: ['fade'],
    fadeOut: ['fade'],
  },
  map: {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'images/01.png',
    nextScene: 'map-click',
    dialog: ['เลือกเส้นทางที่คุณต้องการจะไป'],
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
