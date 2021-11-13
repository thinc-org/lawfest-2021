import 'App.css'
import ExhibitionLayout from '../components/ExhibitionLayout'
import Selector from './components/Selector'
import { MenuData } from './constants'
import { SelectorsConatiner } from './styled'

function ExhibitionMenu() {
  return (
    <ExhibitionLayout>
      <div style={{ height: '100%', display: 'flex' }}>
        <SelectorsConatiner>
          {MenuData.map((data, idx) => (
            <Selector {...data} no={idx} key={idx} />
          ))}
        </SelectorsConatiner>
      </div>
    </ExhibitionLayout>
  )
}

export default ExhibitionMenu
