import { IScene } from './types'

export const AGE_DIALOGUE: { [x: string]: IScene } = {
  'age-1-12': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    isStoredData: false,
    nextScene: 'after-age-dialogue',
    dialog: [
      {
        name: 'แปะ',
        text: '“ เป็นวัยกำลังเติบโตเลยนะ ”',
        variant: 'secondary',
      },
    ],
  },
  'age-13-24': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    isStoredData: false,
    nextScene: 'after-age-dialogue',
    dialog: [
      {
        name: 'แปะ',
        text: '“ เป็นวัยกำลังฝันเลยนะ ”',
        variant: 'secondary',
      },
    ],
  },
  'age-25-40': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    isStoredData: false,
    nextScene: 'after-age-dialogue',
    dialog: [
      {
        name: 'แปะ',
        text: '“ เป็นวัยกำลังเผชิญโลกเลยนะ ”',
        variant: 'secondary',
      },
    ],
  },
  'age-41-60': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    isStoredData: false,
    nextScene: 'after-age-dialogue',
    dialog: [
      {
        name: 'แปะ',
        text: '“ เป็นวัยกำลังไล่ตามสิ่งที่เคยฝันเลยนะ ”',
        variant: 'secondary',
      },
    ],
  },
  'age-60+': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    isStoredData: false,
    nextScene: 'after-age-dialogue',
    dialog: [
      {
        name: 'แปะ',
        text: '“ เป็นวัยที่ก้าวผ่านความเปลี่ยนแปลงมามากมายเลยสินะ ”',
        variant: 'secondary',
      },
    ],
  },
}
