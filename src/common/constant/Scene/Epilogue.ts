import { IScene } from './types'

export const EPILOGUE: { [x: string]: IScene } = {
  'before-raining-stop': {
    type: 'delay',
    bgType: 'color',
    bgColor: '#000000',
    isStoredData: false,
    nextScene: 'raining-stop',
    delay: 1500,
  },
  'raining-stop': {
    type: 'dialog',
    bgType: 'color',
    bgColor: '#000000',
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
    bgType: 'color',
    bgColor: '#000000',
    isStoredData: true,
    dataKey: 'final-hope',
    nextScene: 'epilogue-1',
    question: 'ตอนนี้คุณมีความหวังแค่ไหน ?',
  },
  'epilogue-1': {
    type: 'delay',
    bgType: 'image',
    bgImageSrc: 'last_bg',
    isStoredData: false,
    nextScene: 'epilogue-2',
    delay: 3000,
    text: 'ไม่ว่าความหวังที่มีจะ ลดลงหรือเพิ่มขึ้นก็ไม่เป็นไร',
    forceFade: true,
  },
  'epilogue-2': {
    type: 'delay',
    bgType: 'image',
    bgImageSrc: 'last_bg',
    isStoredData: false,
    nextScene: 'epilogue-3',
    delay: 3000,
    text: 'ดีใจที่ได้มาเจอกันวันนี้นะ',
    forceFade: true,
  },
  'epilogue-3': {
    type: 'delay',
    bgType: 'image',
    bgImageSrc: 'last_bg',
    isStoredData: false,
    nextScene: 'name-input',
    delay: 3000,
    text: 'เรามี….จะให้',
  },
}
