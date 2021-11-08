import { IContent } from './types'

export const HopelessButHoping: IContent[] = [
  {
    type: 'text',
    data: {
      quote: 'Hopeless but Hoping',
    },
  },
  {
    type: 'textArea',
    data: {
      question: 'คุณหวังว่าจะเห็นประเทศไทยเป็นอย่างไร',
      quote: 'Once you choose hope,anything is possible.',
      quoteOwner: 'CHRISTOPHER REEVE',
    },
  },
  {
    type: 'carousel',
    data: {
      contents: [
        /*how should I put these ref lol.
          รูป 1
        - https://freerangestock.com/photos/52618/democracy-monument-bangkok.html

        - ชื่อรูป vehicles on road near buildings
        ที่มา: Peerapon Chantharainthron @peerapon01 on Unsplash.com
 
        - ชื่อรูป ขอให้เป็นดั่งราษฎร์ประสงค์
        ที่มา: Benya T. 

        - ชื่อรูป people standing between store buildings at nighttime 
        ที่มา: Lin Kiu @kappapipi on Unsplash.com

        - ชื่อรูป closeup photo of multicolored stripe flag
        ที่มา: Sharon McCutcheon @sharonmccutcheon on Unsplash.com 
        */
        {
          text: 'การมีความหวัง คือ การต้องการผลลัพธ์ที่ทำให้ชีวิตดีขึ้นไม่ทางใดก็ทางหนึ่ง ไม่เพียงแต่สามารถช่วยให้ก้าวข้ามความยากลำบากไป แต่มันยังสามารถพัฒนาชีวิตของเราได้ เพราะการจินตนาถึงภาพแห่งอนาคตที่ดีกว่าสามารถกระตุ้นให้บุคคลทำตามเส้นทางเพื่อทำให้ความประสงค์นั้นเกิดขึ้น\nไม่ว่าเราจะนึกถึงมันหรือไม่ก็ตาม แต่ความหวังก็เป็นส่วนหนึ่งในชีวิต มันเป็นความจริงที่ปฏิเสธได้ยากว่า ทุกคนมักจะหวังอะไรบางอย่าง นั่นก็เพราะความหวังเป็นส่วนหนึ่งของการดำรงอยู่ของมนุษย์\nด้วยสภาพสังคมที่มีการเปลี่ยนแปลงตลอดเวลา ความคาดหวังของผู้คนในหลาย ๆ ด้านก็เปลี่ยนแปลงไปด้วย ไม่ว่าจะเป็นความคาดหวังต่อประชาธิปไตย คุณภาพชีวิตที่ดี หรือความเท่าเทียม ทุกคนล้วนอยากให้สังคมหลุดพ้นจากปัญหาและพัฒนาต่อไปได้',
          imageUrl: '3-1.jpeg',
          imagePosition: 'top',
          imageRefs: [
            {
              text: 'freerangestock.com',
              url: 'https://freerangestock.com/photos/52618/democracy-monument-bangkok.html',
            },
            {
              text: 'unsplash.com',
              url: 'https://unsplash.com/@peerapon01',
            },
            {
              //TODO fix this shit.
              text: 'ขอให้เป็นดั่งราษฎร์ประสงค์',
              url: 'Benya T.',
            },
            {
              text: 'unsplash.com',
              url: 'https://unsplash.com/@kappapipi',
            },
            {
              text: 'unsplash.com',
              url: 'https://unsplash.com/@sharonmccutcheon',
            },
          ],
        },
      ],
    },
  },
  {
    type: 'paragraph',
    data: {
      content: [
        'ประชาธิปไตยเต็มใบ',
        'คำว่า “ประชาธิปไตย” ที่เข้าใจกันโดยทั่วไปในบริบทสากลคือระบอบการปกครองที่มีประชาชนเป็นเจ้าของอำนาจอธิปไตย บุคคลทุกคนมีสิทธิเสรีภาพตามกฎหมายอย่างเท่าเทียมกัน อีกทั้งยังเป็นสังคมที่พร้อมรับฟังและเปิดรับความเห็นที่แตกต่างอย่างแท้จริง',
        'สิ่งสำคัญที่จะพาเราไปสู่ความหวังอันจะเห็นสังคมไทยเปลี่ยนแปลงเป็นระบอบประชาธิปไตยเต็มใบอย่างแท้จริง คือการปรับเปลี่ยนโครงสร้างทางการเมืองและแก้ไขหรือปรับใช้กฎหมาย กล่าวคือ หากกฎหมายมีความศักดิ์สิทธิ์ ยุติธรรม และการทำงานของรัฐมีความชอบธรรม โปร่งใส สามารถตรวจสอบได้ การที่จะเปลี่ยนสังคมของเราให้เป็นดั่งหวังนั้นก็ไม่ไกลเกินเอื้อม',
        'แล้วประชาธิปไตยของคุณล่ะ เป็นอย่างไร ?',
      ],
    },
  },
  {
    type: 'paragraph',
    data: {
      content: [
        'คุณภาพชีวิต',
        'แม้ว่าสิทธิในชีวิตและเนื้อตัวร่างกายเป็นสิทธิที่กฎหมายได้รับรองให้กับบุคคลทุกคน แต่ก็มีกลุ่มบุคคลบางกลุ่มที่ไม่อาจใช้สิทธินั้นได้อย่างเท่าเทียมกับคนอื่น ๆ ตัวอย่างเช่น',
        '- ผู้พิการ คือ ผู้ที่มีข้อจำกัดในการปฏิบัติกิจวัตรประจำวัน ดังนั้น กฎหมายควรส่งเสริมคุณภาพชีวิตของผู้พิการให้เท่าเทียมกับบุคคลทั่วไป เช่น สิทธิที่จะได้รับอุปกรณ์ที่จำเป็นต่อการดำรงชีวิต สิทธิในการเข้าถึงสาธารณูปโภคที่เอื้อต่อการดำเนินชีวิตแก่ผู้พิการ เป็นต้น',
        '- ผู้ป่วยที่ทรมานจากโรคที่ไม่อาจรักษาได้ ปัจจุบันกฎหมายอนุญาตเพียงแค่ให้บุคคลสามารถแสดงเจตนาไว้ล่วงหน้าว่า เมื่ออยู่ในวาระสุดท้ายของชีวิตสามารถขอใช้สิทธิตายตามธรรมชาติได้ แต่ยังไม่อนุญาตให้ทำการการุณยฆาตซึ่งเป็นการเร่งการเสียชีวิตเพื่อให้พ้นจากความเจ็บปวดทรมาน',
      ],
      contentRef: [
        {
          text: 'thaipbs.or.th',
          url: 'https://news.thaipbs.or.th/content/278173',
        },
      ],
    },
  },
  {
    type: 'paragraph',
    data: {
      content: [
        'ความเท่าเทียม',
        'ความเท่าเทียมในสังคมนั้นควรเกิดขึ้นในทุก ๆ ด้าน รวมถึงด้านเพศและด้านอาชีพ ซึ่งสังคมไทยในปัจจุบันยังไม่ได้ให้ความสำคัญกับเรื่องเหล่านี้มากพอ',
        'ดังจะเห็นได้จากตัวอย่างในด้านเพศ กรณีการสมรสเท่าเทียม และร่างพระราชบัญญัติคู่ชีวิต ที่ลิดรอนบางสิทธิที่กลุ่มคนที่มีความหลากหลายทางเพศควรได้รับเมื่อสมรสกัน เช่น สิทธิการรับสวัสดิการกรณีที่คู่สมรสอีกฝ่ายเป็นข้าราชการ และสิทธิในการขอสัญชาติไทยให้คู่ชีวิต LGBTQ+ ที่ควรมีสิทธิเท่ากับคู่รักชายหญิง',
        'และในด้านอาชีพ ทุกอาชีพควรได้รับการคุ้มครองและสวัสดิการจากรัฐ ทว่าหลายอาชีพกลับยังไม่ได้รับสวัสดิการอย่างเพียงพอ และบางอาชีพก็ยังไม่ถูกรับรองทางกฎหมายในปัจจุบัน เช่น กลุ่มผู้ให้บริการทางเพศ (Sex Worker) ที่ต้องเผชิญอุปสรรคทั้งในเรื่องการค้าแรงงานทางเพศในตลาดมืดที่ตรวจสอบได้ยาก อันตรายต่อผู้ให้บริการและผู้ใช้บริการ และการเสียภาษีเงินได้',
      ],
      contentRef: [
        {
          text: 'workpointtoday.com',
          url: 'https://workpointtoday.com/15explainer-lgbt/',
        },
        {
          text: 'thematter.co',
          url: 'https://thematter.co/thinkers/if-we-decriminalize-sex-worker/125626',
        },
      ],
    },
  },
  {
    type: 'paragraph',
    data: {
      content: [
        'How to ขยับประเทศผ่านการเมือง กฎหมาย และสังคม',
        'การจะทำให้ความคาดหวังต่าง ๆ ของผู้คนเป็นจริงได้ต้องสร้างความเปลี่ยนแปลงในทุก ๆ ภาคส่วนไปพร้อมกัน ไม่ว่าจะเป็นด้านการเมือง กฎหมาย หรือสังคม เพราะทุกด้านมีอิทธิพลต่อกันและกัน การเมืองมีผลต่อการออกกฎหมายและการดำรงชีวิตของคนในสังคม กฎหมายเป็นการใช้อำนาจทางการเมืองควบคุมสังคม ส่วนสังคมเป็นผู้สร้างและดำรงไว้ซึ่งการเมืองและกฎหมาย',
        'เราจะสามารถขยับเพื่อเขยื้อนให้ประเทศดีกว่าที่เป็นอยู่ได้อย่างไรบ้าง ?',
      ],
    },
  },
  {
    type: 'paragraph',
    data: {
      content: [
        'ขยับที่ 1 : โครงสร้างทางการเมืองส่งผลกระทบต่อคนทุกชนชั้น หากโครงสร้างทางการเมืองดี ผู้คนในสังคมจะเข้าถึงปัจจัยพื้นฐานต่าง ๆ ได้อย่างทั่วถึงและเท่าเทียม ในทางกลับกัน หากโครงสร้างทางการเมืองแย่ก็จะเกิดความสูญเสียและความเหลื่อมล้ำอย่างรุนแรง ปัญหาเชิงโครงสร้างของการเมืองเกิดได้จากหลายสาเหตุ เช่น การรัฐประหาร การคอร์รัปชัน เป็นต้น การจะวางรากฐานทางการเมืองให้ดีจึงจำต้องป้องกันปัญหาเหล่านี้ให้ได้',
        'ขยับที่ 2 : เนื่องจากกฎหมายเป็นเครื่องมือหนึ่งในการควบคุมสังคม กฎหมายจึงต้องถูกออกแบบอย่างรอบคอบเพื่อรักษาไว้ซึ่งความยุติธรรมและความสงบเรียบร้อย ตลอดจนสอดรับกับความต้องการของประชาชนส่วนใหญ่ เมื่อบริบทของสังคมเปลี่ยน กฎหมายก็ควรจะต้องเปลี่ยนตามให้เหมาะสม และเพื่อการนั้น ประชาชนจึงสามารถมีส่วนร่วมในการเปลี่ยนแปลงกฎหมายได้ในหลาย ๆ วิธี เช่น การใช้สิทธิเสนอร่างกฎหมายโดยตรง การใช้สิทธิเลือกตั้งสมาชิกสภาผู้แทนราษฎรเข้าไปในรัฐสภาเพื่อเสนอร่างกฎหมายแทนตน เป็นต้น',
        'ขยับที่ 3 : ไม่ว่าอย่างไร การสร้างความเปลี่ยนแปลงด้านการเมืองและกฎหมายต้องอาศัยความร่วมมือจากผู้คนในสังคม โดยอาจเริ่มที่การสร้างความตระหนักรู้ การพยายามเข้าใจปัญหา การปลุกจิตสำนึกของผู้คนให้เห็นความสำคัญและใช้สิทธิหรือความสามารถที่ตนมีในการแก้ไขและพัฒนาปัญหาต่าง ๆ เพื่อกำหนดทิศทางของสังคมต่อไป',
      ],
    },
  },
  {
    type: 'carousel',
    data: {
      contents: [
        {
          text: '“ความหวัง คือ ผลลัพธ์จากการลงแรงเคลื่อนไหวเปลี่ยนแปลงสังคม”\nโจชัว หว่อง',
          imageUrl: '3-2.jpeg',
          imagePosition: 'top',
          imageRefs: [
            {
              text: 'unsplash.com',
              url: 'https://unsplash.com/@labrum777',
            },
          ],
        },
      ],
      final: true,
    },
  },
]
