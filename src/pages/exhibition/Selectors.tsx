import 'App.css'
import {SelectorText} from './styled'
import choice1 from 'assets/pic/Activity1.png'
import choice2 from 'assets/pic/Activity2.png'
import choice3 from 'assets/pic/Activity3.png'

function Selector(props: { no: string; name: string }){
  var sources 
  if(props.no==='1'){
    sources = choice1
  }else if(props.no==='2'){
    sources = choice2
  }else if(props.no==='3'){
    sources = choice3
  }

  return(
    <div style={{justifyContent:'center'}}>
      <img src = {sources}  width = '80%' style={{borderRadius: '10px',marginLeft:'10%',maxWidth:'200px'}} alt={props.no}>
      </img>
      <SelectorText>{'Mission'+props.no+':'}</SelectorText>
      <SelectorText> {props.name}</SelectorText>
    </div>
  )
}
function Selectors(props:{onClick:any}){

	return(
	<div>
      <div style={{display:'flex',  justifyContent:'center', paddingTop:'110px'}}>
        <div onClick={()=>props.onClick(1)} style={{display:'flex',marginRight:'5%'}}>
          <Selector name = "What is Hope?" no = "1" ></Selector>
        </div>
		<div onClick={()=>props.onClick(2)}>
   	      <Selector name = "Hope ignited" no = "2"></Selector>
		</div>
      </div>

      <div onClick={()=>props.onClick(3)} style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
        <Selector name = "Hopeless but Hoping" no = "3"></Selector>
      </div>
    </div>
  )
  
}

export default Selectors