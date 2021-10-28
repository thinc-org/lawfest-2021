import { IContent } from './types'

export const HopelessButHoping: IContent[] = [
  {
    type: 'text',
    data: {
      quote: 'Hopeless but Hoping',
    },
  },
  {
    type: 'text',
    data: {
      quote: '“Once you choose hope, anything is possible.”',
      quoteOwner: 'Christopher Reeve',
      quoteOwnerRef: 'American actor, director, and activist',
    },
  },
  {
    type: 'textArea',
    data: {
      question: 'บอกหน่อยสิ เทอมนี้เธอจะหนี F ยังไง',
    },
  },
  {
    type: 'carousel',
    data: {
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
    },
  },
]
