import { IScene } from '.'

export const RAIN_SCENE: { [x: string]: IScene } = {
  'walking-1': {
    type: 'dialog',
    bgType: 'color',
    bgColor: 0xe9dfde,
    isStoredData: false,
    nextScene: 'walking-2',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'คุณเดินต่อไป',
        variant: 'secondary',
      },
    ],
  },
  'walking-2': {
    type: 'dialog',
    bgType: 'image',
    bgColor: 0xe9dfde,
    bgImageSrc: 'footpath',
    isStoredData: false,
    nextScene: 'walking-2-1',
    dialog: [
      {
        name: '$name',
        text: '“ อา… เดินไปทางไหนดี ”',
        variant: 'primary',
      },
    ],
  },
  'walking-2-1': {
    type: 'image-click',
    bgType: 'image',
    bgImageSrc: 'footpath',
    isStoredData: false,
    nextScene: 'rain-1',
    dialog: [
      {
        name: '$name',
        text: '“ อา… เดินไปทางไหนดี ”',
        variant: 'primary',
      },
    ],
  },
  'rain-1': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'mirror_water',
    isStoredData: false,
    nextScene: 'hope-value-1',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'ยินดีด้วย! คุณโดนน้ำกระเด็นใส่ขา',
        variant: 'secondary',
      },
      {
        name: '$name',
        text: '“ เฮ้อ ไม่รอดอยู่ดี ”',
        variant: 'primary',
      },
    ],
  },
  'hope-value-1': {
    type: 'slider',
    question: 'ตอนนี้คุณมีความหวังแค่ไหน ?',
    bgType: 'image',
    bgImageSrc: 'overcast_cloud',
    isStoredData: false,
    nextScene: 'rain-2',
  },
  'rain-2': {
    type: 'dialog',
    bgType: 'image',
    bgColor: 0xe9dfde,
    bgImageSrc: 'overcast_rain_cloud',
    isStoredData: false,
    nextScene: 'rain-3',
    dialog: [
      {
        name: '$name',
        text: '“ ฝนตกแล้ว ”',
        variant: 'primary',
      },
      {
        name: '$name',
        text: '“ หาที่หลบฝนดีกว่า ”',
        variant: 'primary',
      },
    ],
  },
  'rain-3': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'heavy_mirror_water',
    isStoredData: false,
    nextScene: 'rain-4',
    dialog: [
      {
        name: '',
        text: 'ซ่า',
        variant: 'secondary',
      },
    ],
  },
  'rain-4': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'bus',
    isStoredData: false,
    nextScene: 'rain-5',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'รถเมล์เก่า ๆ แล่นผ่านแอ่งน้ำขังริมถนน น้ำสกปรกกระเด็นเลอะตัวคุณ',
        variant: 'secondary',
      },
    ],
  },
  'rain-5': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'dirty_hand',
    isStoredData: false,
    nextScene: 'before-shop',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'สถานการณ์บังคับให้คุณต้องเดินหน้าต่อไป',
        variant: 'secondary',
      },
    ],
  },
  'before-shop': {
    type: 'dialog',
    bgType: 'color',
    bgColor: 0xe9dfde,
    isStoredData: false,
    nextScene: 'before-shop-choice-delay',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'คุณหันไปเห็นร้านขายของชำ',
        variant: 'secondary',
      },
      {
        name: 'ผู้นำทาง',
        text: 'มีเสียงเรียกคุณจากในร้าน',
        variant: 'secondary',
      },
      {
        name: '???',
        text: '“ มาหลบฝนก่อนมา ๆ ”',
        variant: 'secondary',
      },
      {
        name: 'ผู้นำทาง',
        text: 'คุณเข้าไปในร้านตามเสียงเรียก',
        variant: 'secondary',
      },
    ],
  },
}
