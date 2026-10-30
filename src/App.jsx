import { Component } from "react";
import Modal from "./components/Modal/Modal.jsx";
import OpenModal from "./components/OpenModal/OpenModal.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Title from "./components/Title/Title.jsx";
class App extends Component{
  state={
    isOnScreen:false,
    name:""
  }

  componentDidMount(){
    let userName =window.localStorage.getItem("name")
    this.setState({
      name:userName||"",
    })
  }

  componentDidUpdate(_,prevState){
    if(prevState.name !== this.state.name){
      window.localStorage.setItem("name",this.state.name)
    }
    
  }

  handleToggle=()=>{
    this.setState((prev)=>({isOnScreen:!prev.isOnScreen}))
  }
  handleSubmitApp = (name)=>{
    this.setState({
      name:name
    })
  }
  render(){
    return(
      <>
      <Timer/>
      <Title userName={this.state.name}/>
      <OpenModal openModal={this.handleToggle}/>
      {this.state.isOnScreen && <Modal submittedName={this.handleSubmitApp} closeModal={this.handleToggle}/>}
      </>
    )
  }
}
export default App