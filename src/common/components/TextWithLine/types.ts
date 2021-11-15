import { StyledText } from '../Typography'

export interface TextWithLineProps
  extends React.ComponentProps<typeof StyledText> {
  leftLineColor?: string
  rightLineColor?: string
  textColor?: string
}
