import {
  SelectorContainer,
  SelectorText,
  StyledImage,
  TextConatainer,
} from './styled'
import { SelectorProps } from './types'

function Selector(props: SelectorProps) {
  const { no, name, link, imageSrc } = props

  return (
    <div>
      <SelectorContainer to={link}>
        <StyledImage src={imageSrc} alt={`exhibition-menu-${no}`} />
        <TextConatainer>
          <SelectorText css={{ flexShrink: 0 }}>{`Mission ${
            no + 1
          }:`}</SelectorText>
          <SelectorText> {name}</SelectorText>
        </TextConatainer>
      </SelectorContainer>
    </div>
  )
}
export default Selector
