import { IScene } from './types'

export const MAIN_SCENE: { [x: string]: IScene } = {
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
    nextScene: 'age-choice',
  },
  'age-choice': {
    type: 'choice',
    bgType: 'color',
    isStoredData: true,
    dataKey: 'age',
    nextScene: '',
    question: '"ว่าแต่เราอายุเท่าไหร่ล่ะ ?"',
    choices: [
      {
        nextScene: 'age-1-12',
        text: '1-12 ปี',
        value: '0',
      },
      {
        nextScene: 'age-13-24',
        text: '13-24 ปี',
        value: '1',
      },
      {
        nextScene: 'age-25-40',
        text: '25-40 ปี',
        value: '2',
      },
      {
        nextScene: 'age-41-60',
        text: '41-60 ปี',
        value: '3',
      },
      {
        nextScene: 'age-60+',
        text: '60 ปีเป็นต้นไป',
        value: '4',
      },
    ],
  },
  'after-age-dialogue': {
    type: 'dialog',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    nextScene: 'dream-input',
    isStoredData: false,
    dialog: [
      {
        name: 'แปะ',
        text: '“แปะยังอยากเห็นประเทศไปได้ไกลกว่านี้”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“คิดว่าเขาเองก็เหมือนกัน”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“จากวันนั้นจนถึงวันนี้ เรามาได้ไกลเกินกว่าที่เคยคิดไว้ เสียอีก”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“ถ้าเขายังอยู่ ไม่แน่นะ เราอาจจะได้จดทะเบียนสมรส ถูกต้องตามกฎหมายในชั่วชีวิตนี้ก็ได้”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“แปะเชื่อว่าเขาก็คงคิดเหมือนกัน”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“แล้วเราล่ะ”',
        variant: 'secondary',
      },
    ],
  },
  'dream-input': {
    type: 'input',
    bgType: 'color',
    bgColor: '#F1E1C7',
    nextScene: 'after-dream-dialogue',
    isStoredData: false,
    question: '“มีฝันที่อยากจะเห็นมันเป็นจริงหรือเปล่า?”',
  },
  'after-dream-dialogue': {
    type: 'dialog',
    bgType: 'image',
    bgColor: '#F1E1C7',
    bgImageSrc: 'images/01.png',
    nextScene: 'age-choice',
    isStoredData: false,
    dialog: [
      {
        name: 'แปะ',
        text: '“ ไม่ว่าความฝันนั้นมันจะยิ่งใหญ่จนทำให้รู้สึกว่าเกินตัว หรือเล็กจนกลัวว่ามันจะไร้ค่าสำหรับใคร หรือต่อให้ไม่มีเลย ก็ไม่เป็นไร ”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“ ขอบคุณนะ ที่มาคุยกันวันนี้ ”',
        variant: 'secondary',
      },
    ],
  },
}

export const IMAGE_LIST = ['images/01.png']
