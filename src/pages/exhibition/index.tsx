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
    if(this.state.status === 0) 
      return(
        <div>
         <img src = {home} width = '30px'></img>
         <Selectors onClick={(i:any)=>this.handleClick(i)}></Selectors>
        </div>
      )
    
    else if(this.state.status === 1){
      return(
        <div>
         <img src = {home} width = '30px'></img>
         <p>pages 1</p>
        </div>
      )
    }
    else if(this.state.status === 2){
      return(
        <div>
         <img src = {home} width = '30px'></img>
         <p>pages 2</p>
        </div>
      )
    }
    else if(this.state.status === 3){
      return(
        <div>
         <img src = {home} width = '30px'></img>
         <p>pages 3</p>
        </div>
      )
    }
  }
  
  handleClick(i:any){
    console.log("click "+i)
    this.setState({status:i})
    this.render()
  }
}
export default Exhibition
