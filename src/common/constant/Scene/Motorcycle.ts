import { IScene } from '.'

export const MOTORCYCLE_SCENE: { [x: string]: IScene } = {
  intro: {
    type: 'intro',
    bgType: 'color',
    bgColor: 0xf1e1c7,
    nextScene: 'name-input',
    isStoredData: false,
  },
  'name-input': {
    type: 'input',
    bgType: 'color',
    bgColor: 0xf1e1c7,
    dataKey: 'name',
    isStoredData: true,
    nextScene: 'map',
    question: 'คุณอยากให้เราเรียกคุณว่าอะไร ?',
  },
  map: {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'map',
    isStoredData: false,
    nextScene: 'click-to-continue',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'เลือกเส้นทางที่คุณต้องการจะไป',
        variant: 'secondary',
      },
    ],
  },
  'click-to-continue': {
    type: 'image-click',
    bgType: 'image',
    bgImageSrc: 'map',
    isStoredData: false,
    nextScene: 'footpath-1',
  },
  'footpath-1': {
    type: 'dialog',
    bgType: 'image',
    bgColor: 0xf1e1c7,
    bgImageSrc: 'landing',
    isStoredData: false,
    nextScene: 'motorcycle-1',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'คุณตกลงมา ณ ที่แห่งหนึ่ง',
        variant: 'secondary',
      },
      {
        name: 'น้องรพี',
        text: '“นี่เราอยู่ที่ไหน ?”',
        variant: 'primary',
      },
    ],
  },
  'motorcycle-1': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'motorcycle',
    isStoredData: false,
    nextScene: 'motorcycle-choice',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'รถจักรยานยนต์คันหนึ่งแล่นผ่านคุณไป มันเฉี่ยวสีข้างคุณ เล็กน้อย โชคดีที่ไม่เป็นอะไร',
        variant: 'secondary',
      },
      {
        name: 'น้องรพี',
        text: '“มอเตอร์ไซค์!? นี่มันบนทางเท้านะเนี่ย”',
        variant: 'primary',
      },
    ],
  },
  'motorcycle-choice': {
    type: 'choice',
    bgType: 'image',
    bgImageSrc: 'motorcycle',
    isStoredData: false,
    nextScene: 'motorcycle-tip',
    bgColor: 0xf1e1c7,
    question: 'คุณจะทำยังไงกับเหตุการณ์นี้',
    choices: [
      {
        nextScene: '',
        text: 'ตะโกนด่ามอเตอร์ไซค์',
        value: '0',
      },
      {
        nextScene: '',
        text: 'ด่าในใจ',
        value: '1',
      },
      {
        nextScene: '',
        text: 'หยิบโทรศัพท์ขึ้นมาถ่ายเลขทะเบียน',
        value: '2',
      },
    ],
  },
  'motorcycle-tip': {
    type: 'dialog',
    bgType: 'image',
    bgImageSrc: 'motorcycle',
    isStoredData: false,
    nextScene: 'walking-1',
    dialog: [
      {
        name: 'ผู้นำทาง',
        text: 'รู้หรือไม่ หากพบเจอรถจักรยานยนต์บนทางเท้า สามารถ ร่วมแจ้งเบาะแสเพื่อรับส่วนแบ่งค่าปรับของประชาชนได้ ตามระเบียบกรุงเทพมหานครฯ',
        variant: 'secondary',
      },
    ],
  },
}
