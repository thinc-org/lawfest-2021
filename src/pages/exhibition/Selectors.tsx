import 'App.css'
import choice1 from 'assets/pic/Activity1.png'
import choice2 from 'assets/pic/Activity2.png'
import choice3 from 'assets/pic/Activity3.png'

function Selector(props: { no: string; name: string }){
  var sources 
  if(props.no==='1'){
    sources = choice1
  }
  else if(props.no==='2'){
    sources = choice2
  }
  else if(props.no==='3'){
    sources = choice3
  }

  return(
    <div>
      <img src = {sources} width = "160px">
      </img>
      <p>
        {"Mission "+props.no+":"}
      </p>
      <p>
        {props.name}
      </p>
    </div>
  )
}
function Selectors(){

	return(
	<div>
      <div style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'122px'}}>
        <div style={{display:'flex',marginRight:'30px'}}>
          <Selector name = "What is Hope?" no = "1" ></Selector>
        </div>
        <Selector name = "Hope ignited" no = "2"></Selector>
      </div>

      <div style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
        <Selector name = "Hopeless but Hoping" no = "3"></Selector>
      </div>
    </div>
  )
  
}

export default Selectors