import { IScene } from '.'

export const SHOP_SCENE: { [x: string]: IScene } = {
  'before-shop-choice-delay': {
    type: 'delay',
    bgType: 'image',
    bgImageSrc: 'zoom_in_author',
    isStoredData: false,
    nextScene: 'shop-choice',
    delay: 1500,
  },
  'shop-choice': {
    type: 'choice',
    bgType: 'image',
    bgImageSrc: 'zoom_in_author',
    isStoredData: false,
    nextScene: 'before-shop-dialogue-delay',
    question: 'จะทำอย่างไรกับเหตุการณ์ที่เกิดขึ้น ?',
    choices: [
      {
        text: 'ชวนแปะคุย',
        nextScene: '',
        value: '',
      },
      {
        text: 'ขอผ้ามาเช็ดตัว',
        nextScene: '',
        value: '',
      },
    ],
  },
  'before-shop-dialogue-delay': {
    type: 'delay',
    bgType: 'image',
    bgColor: 0x000000,
    bgImageSrc: 'in_shop',
    isStoredData: false,
    nextScene: 'shop-1',
    delay: 1500,
  },
  'shop-1': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop',
    isStoredData: false,
    nextScene: 'shop-focus-image',
    dialog: [
      {
        name: '$name',
        text: '“ ช่วงนี้เป็นไงบ้างแปะ ขายดีไหม? ”',
        variant: 'primary',
      },
      {
        name: 'แปะ',
        text: '“ ร้านจะปิดแล้ว ”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“ พักนี้ขายไม่ค่อยได้เลย จริง ๆ ก็ขายไม่ได้มาพักใหญ่แล้วแหละ ตั้งแต่มีพวกร้านสะดวกซื้อดัง ๆ เขามาเปิด ”',
        variant: 'secondary',
      },
      {
        name: '$name',
        text: '“ อ้าว แล้วแปะจะไปทำอะไรต่อล่ะ ”',
        variant: 'primary',
      },
      {
        name: 'แปะ',
        text: '“ ก็คงย้ายกลับไปอยู่บ้านที่ต่างจังหวัดแหละ ”',
        variant: 'secondary',
      },
      {
        name: 'แปะ',
        text: '“ ถึงจะไม่เจริญเท่าที่นี่ แต่ก็คงพอมีช่องทางทำมาหากิน อยู่บ้าง ”',
        variant: 'secondary',
      },
      {
        name: '$name',
        text: '“ ย้ายกลับไปอยู่กับครอบครัวหรอแปะ ? ”',
        variant: 'primary',
      },
      {
        name: 'แปะ',
        text: '“ ครอบครัวเหรอ... ”',
        variant: 'secondary',
      },
    ],
  },
  'shop-focus-image': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'focus_picture_frame',
    isStoredData: false,
    nextScene: 'shop-zoom-image',
    dialog: [
      {
        name: 'แปะ',
        text: '“ ก็เคยมีอยู่นะ ”',
        variant: 'secondary',
      },
    ],
  },
  'shop-zoom-image': {
    type: 'image-click',
    bgType: 'image',
    bgImageSrc: 'zoom_in_picture_frame',
    isStoredData: false,
    nextScene: 'shop-towel-ask',
  },
  'shop-towel-ask': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'in_shop',
    isStoredData: false,
    nextScene: 'shop-news',
    dialog: [
      {
        name: 'แปะ',
        text: '“เดี๋ยวแปะไปหยิบผ้ามาให้เช็ดดีกว่า เปียกไปหมดเลยนี่ ”',
        variant: 'secondary',
      },
    ],
  },
  'shop-news': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'tv_annoucement',
    isStoredData: false,
    nextScene: 'towel-pick',
    dialog: [
      {
        name: 'ผู้ประกาศข่าว',
        text: '“... รายงานสดจากหน้า…. การชุมนุมของ… เพื่อเรียกร้อง….”',
        variant: 'secondary',
      },
    ],
  },
  'towel-pick': {
    type: 'delay',
    bgType: 'image',
    bgImageSrc: 'towel_bringing',
    isStoredData: false,
    nextScene: 'age-choice',
    delay: 2000,
  },
  'age-choice': {
    type: 'choice',
    bgType: 'image',
    bgImageSrc: 'towel_bringing',
    isStoredData: true,
    dataKey: 'age',
    nextScene: '',
    bgColor: 0xf1e1c7,
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
    bgImageSrc: 'in_shop_brighter',
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
    bgType: 'image',
    bgImageSrc: 'in_shop_brighter',
    nextScene: 'after-dream-dialogue',
    isStoredData: false,
    question: '“มีฝันที่อยากจะเห็นมันเป็นจริงหรือเปล่า?”',
  },
  'after-dream-dialogue': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'zoom_in_author',
    nextScene: 'before-raining-stop',
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
