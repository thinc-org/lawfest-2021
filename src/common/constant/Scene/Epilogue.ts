import { IScene } from './types'

export const EPILOGUE: { [x: string]: IScene } = {
  'before-raining-stop': {
    type: 'delay',
    bgType: 'image',
    bgColor: '#000000',
    bgImageSrc: 'images/01.png',
    isStoredData: false,
    nextScene: 'raining-stop',
    delay: 1500,
  },
  'raining-stop': {
    type: 'dialog',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    isStoredData: false,
    nextScene: 'final-hope',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'ฝนหยุดตกแล้ว...',
        variant: 'secondary',
      },
    ],
  },
  'final-hope': {
    type: 'slider',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    isStoredData: true,
    dataKey: 'final-hope',
    nextScene: 'name-input',
    question: 'ตอนนี้คุณมีความหวังแค่ไหน ?',
  },
}
