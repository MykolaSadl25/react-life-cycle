import { Component } from "react";
import Modal from "./components/Modal/Modal.jsx";
import OpenModal from "./components/OpenModal/OpenModal.jsx";
class App extends Component{
  state={
    isOnScreen:false,
  }

  handleToggle=()=>{
    this.setState((prev)=>({isOnScreen:!prev.isOnScreen}))
  }
  render(){
    return(
      <>
      <OpenModal openModal={this.handleToggle}/>
      {this.state.isOnScreen && <Modal closeModal={this.handleToggle}/>}
      </>
    )
  }
}
export default App