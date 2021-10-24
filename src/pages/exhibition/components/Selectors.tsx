import 'App.css'
import {SelectorText} from 'pages/exhibition/styled'
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
  //console.log(window.innerWidth)

  return(
    <div style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
      <img src = {sources}  width = {0.28*window.innerWidth} style={{borderRadius: '10px',alignSelf:'center',paddingBottom:'5px'}} alt={props.no}></img>
      <SelectorText>{'Mission'+props.no+':'}</SelectorText>
      <SelectorText> {props.name}</SelectorText>
    </div>
  )
}

function SelectorDesktop(props: { no: string; name: string }){
  var sources 
  if(props.no==='1'){
    sources = choice1
  }else if(props.no==='2'){
    sources = choice2
  }else if(props.no==='3'){
    sources = choice3
  }
  //console.log(window.innerWidth)

  return(
    <div style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
      <img src = {sources}  width = {0.2*window.innerWidth} style={{borderRadius: '10px',alignSelf:'center',paddingBottom:'5px'}} alt={props.no}></img>
      <SelectorText>{'Mission '+props.no+': '+props.name}</SelectorText>
    </div>
  )
}

function Selectors(props:{onClick:any}){
  if(window.innerWidth<=1024)
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

      <div style={{display:'flex',  justifyContent:'center', alignItems:'center',marginTop:'5%'}}>
        <div onClick={()=>props.onClick(3)}>
          <Selector name = "Hopeless but Hoping" no = "3"></Selector>
        </div>
      </div>
    </div>
  )
  else
  return(
 	<div>
      <div style={{display:'flex',  justifyContent:'center', paddingTop:'220px'}}>
        <div onClick={()=>props.onClick(1)} style={{marginRight:'5%'}}>
          <SelectorDesktop name = "What is Hope?" no = "1" ></SelectorDesktop>
        </div>
		    <div onClick={()=>props.onClick(2)} style={{marginRight:'5%'}}>
   	      <SelectorDesktop name = "Hope ignited" no = "2"></SelectorDesktop>
		    </div>
        <div onClick={()=>props.onClick(3)}>
          <SelectorDesktop name = "Hopeless but Hoping" no = "3"></SelectorDesktop>
        </div>

      </div>
    </div>

  )
  
}

export default Selectors