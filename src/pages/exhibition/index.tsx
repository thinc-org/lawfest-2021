import 'App.css'
import choice1 from 'assets/pic/Activity1.png'
import choice2 from 'assets/pic/Activity2.png'
import choice3 from 'assets/pic/Activity3.png'

function Exhibition() {
  return (
    <div>
      <div style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'122px'}}>
        <img src={choice1} alt = "choice1" width = "163px" style={{marginRight:'38px'}} ></img>
        <img src={choice2} alt = "choice2" width = "163px"></img>
      </div>

      <div style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
        <img src={choice3} alt = "choice3" width = "163px"></img>
      </div>
    </div>
  )
}

export default Exhibition
