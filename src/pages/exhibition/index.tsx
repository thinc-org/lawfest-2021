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
      content = (
        <div style={{height:'100%',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <p>What is Hope?</p>
          <p>---แตะเพื่อไปต่อ---</p>
        </div>
      )
    }else if(this.state.status === 2){
      content = (
        <div style={{height:'100%',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <p>Hope Ignited</p>
          <p>---แตะเพื่อไปต่อ---</p>
        </div>
      )
    }else if(this.state.status === 3){
      content = (
        <div style={{height:'100%',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <p>Hopeless but Hoping</p>
          <p>---แตะเพื่อไปต่อ---</p>
        </div>
      )
    }

    return(
        <div style={{backgroundColor:'#f1e1c7', height:'100vh', position:'relative'}}>
          <img src = {home} width = '30px' onClick = {()=>this.setState({status:0})} alt="home-icon" style={{position:'absolute'}}></img> 
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
