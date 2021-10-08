import 'App.css'
import Selectors from 'pages/exhibition/Selectors'
import home from 'assets/pic/home.png'
import React from 'react'

class Exhibition extends React.Component<{},{status:0}> {
  constructor(props:any){
    super(props)
    this.state = {status:0}
  }
  render(){
    var content
    
    if(this.state.status === 0) 
      content = <Selectors onClick={(i:any)=>this.handleClick(i)}></Selectors>
    else if(this.state.status === 1){
      content = <p style={{display:'flex', justifyContent:'center'}}>What is Hope?</p>
    }else if(this.state.status === 2){
      content = <p style={{display:'flex', justifyContent:'center'}}>Hope Ignited</p>
    }else if(this.state.status === 3){
      content = <p style={{display:'flex', justifyContent:'center'}}>Hopeless but Hoping</p>
    }

    return(
        <div style={{backgroundColor:'#f1e1c7'}}>
         <img src = {home} width = '30px'onClick = {()=>this.setState({status:0})}></img>
         {content}
        </div>
      )
  }
  
  handleClick(i:any){
    //console.log("click "+i)
    this.setState({status:i})
    this.render()
  }
}
export default Exhibition
