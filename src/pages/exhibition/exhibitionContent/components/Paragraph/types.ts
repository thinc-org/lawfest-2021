import { IReference } from "common/constant/ExhibitionContent/types";

export interface ParagraphProps {
  title: string
  quote: string
  quoteOwner: string
  content: string[]
  contentRef?: IReference[]
  onClick?: () => void
}