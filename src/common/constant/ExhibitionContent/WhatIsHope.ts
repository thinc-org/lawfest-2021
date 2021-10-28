import { ICarousel, IContent } from './types'

export const carouselContent: ICarousel = {
  quote: 'Where there is hope, there is life',
  quoteOwner: 'ANNE FRANK',
  contents: [
    {
      text: 'ก็แหม...เล่นไปลงวิชายากๆ เรียนไปได้ 2 วัน จาก Online กายก็ไป On-bed เฉยเลย จะไม่ F ได้อย่างไร แต่อย่าได้กังวลไป ถ้าถอนทันก็สิ้นเรื่อง\nก็แหม...เล่นไปลงวิชายากๆ เรียนไปได้ 2 วัน จาก Online กายก็ไป On-bed เฉยเลย จะไม่ F ได้อย่างไร แต่อย่าได้กังวลไป ถ้าถอนทันก็สิ้นเรื่อง',
      contentRefs: [
        {
          text: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Wikipedia',
        },
      ],
      imageRefs: [
        {
          text: 'Wikipedia2',
          url: 'https://en.wikipedia.org/wiki/Wikipedia',
        },
        {
          text: 'Wikipedia2',
          url: 'https://en.wikipedia.org/wiki/Wikipedia',
        },
      ],
    },
    {
      text: 'ก็แหม...เล่นไปลงวิชายากๆ เรียนไปได้ 2 วัน จาก Online กายก็ไป On-bed เฉยเลย จะไม่ F ได้อย่างไร แต่อย่าได้กังวลไป ถ้าถอนทันก็สิ้นเรื่อง',
      imageUrl: '02.png',
      imagePosition: 'top',
    },
    {
      text: 'ก็แหม...เล่นไปลงวิชายากๆ เรียนไปได้ 2 วัน จาก Online กายก็ไป On-bed เฉยเลย จะไม่ F ได้อย่างไร แต่อย่าได้กังวลไป ถ้าถอนทันก็สิ้นเรื่อง',
      imageUrl: '01.png',
      imagePosition: 'left',
    },
  ],
}

export const WhatIsHope: IContent[] = [
  {
    type: 'text',
    data: {
      quote: 'What is Hope?',
    },
  },
  {
    type: 'text',
    data: {
      quote: 'Where there is hope, there is life',
      quoteOwner: 'Anne Frank',
      quoteOwnerRef: 'JEWISH’S DIARIST DURING WW2',
    },
  },
  {
    type: 'multipleChoice',
    data: { choiceList: ['ตัวเอง', 'เพื่อน', 'จะ F ได้ไง ก็ถอนกันหมด'] },
  },
  {
    type: 'carousel',
    data: carouselContent,
  },
]
