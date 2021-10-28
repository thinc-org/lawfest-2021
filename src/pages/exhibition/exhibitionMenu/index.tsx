import 'App.css'
import choice1 from 'assets/pic/Activity1.png'
import choice2 from 'assets/pic/Activity2.png'
import choice3 from 'assets/pic/Activity3.png'
import {
  SelectorContainer,
  SelectorsConatiner,
  SelectorText,
  StyledImage,
  TextConatainer,
} from './styled'

function Selector(props: { no: number; name: string; link: string }) {
  const src = [choice1, choice2, choice3]
  const { no, name, link } = props

  return (
    <div>
      <SelectorContainer to={link}>
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
        <Selector name="What is Hope?" no={0} link="/exhibition/what-is-hope" />
        <Selector name="Hope ignited" no={1} link="/exhibition/hope-ignited" />
        <Selector
          name="Hopeless but Hoping"
          no={2}
          link="/exhibition/hopeless-but-hoping"
        />
      </SelectorsConatiner>
    </div>
  )
}

export default Selectors
