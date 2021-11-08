import { IReference } from 'common/constant/ExhibitionContent/types'

export interface ParagraphProps {
  content: string[]
  contentRef?: IReference[]
  final?: boolean
  onClick?: () => void
}
