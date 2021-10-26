import 'App.css'
import {
  SelectorContainer,
  SelectorsConatiner,
  SelectorText,
  StyledImage,
  TextConatainer,
} from './styled'
import choice1 from 'assets/pic/Activity1.png'
import choice2 from 'assets/pic/Activity2.png'
import choice3 from 'assets/pic/Activity3.png'

function Selector(props: { no: number; name: string; onClick: () => void }) {
  const src = [choice1, choice2, choice3]
  const { no, name, onClick } = props

  return (
    <div>
      <SelectorContainer onClick={onClick}>
        <StyledImage src={src[no]} alt="" />
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

function Selectors(props: { onClick: any }) {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <SelectorsConatiner>
        <Selector
          name="What is Hope?"
          no={0}
          onClick={() => props.onClick(1)}
        />
        <Selector name="Hope ignited" no={1} onClick={() => props.onClick(2)} />
        <Selector
          name="Hopeless but Hoping"
          no={2}
          onClick={() => props.onClick(3)}
        />
      </SelectorsConatiner>
    </div>
  )
}

export default Selectors
