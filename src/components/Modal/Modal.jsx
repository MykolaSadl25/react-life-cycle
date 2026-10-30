import { Component } from "react";
import { Backdrop,ModalWindow,CloseModal,ModalForm,FormInputs,SendButton } from "./Modal";
import { nanoid } from "nanoid";
class Modal extends Component{
    
    state={
        name:"",
        email:"",
        phoneNumber:""
    }

    componentDidMount(){
        window.addEventListener("keydown",this.handleCloseOnEsc)
    }
    componentWillUnmount(){
        window.removeEventListener("keydown",this.handleCloseOnEsc)
    }

    handleCloseOnEsc = (evt)=>{
        if (evt.code==="Escape") {
            this.props.closeModal()
        }
    }

    handleCloseOnBackdrop = (evt)=>{
            if (evt.target === evt.currentTarget) {
                this.props.closeModal()
            }
        }

        handleSubmit = (evt)=>{
            evt.preventDefault()
            const data={
                name:this.state.name,
            }

            this.setState({
                name:"",
            })
            
           this.props.submittedName(data.name)
           this.props.closeModal()
        }
    
    render(){
        const {closeModal}=this.props;
        return(
            <Backdrop onClick={this.handleCloseOnBackdrop}>
                <ModalWindow>
                    <ModalForm onSubmit={this.handleSubmit}>
                        <CloseModal onClick={closeModal}>X</CloseModal>
                        <FormInputs type="text" placeholder="enter your name" value={this.state.name} onChange={(evt)=>this.setState({name:evt.target.value})}/>
                        <SendButton>Send</SendButton>
                    </ModalForm>
                </ModalWindow>
            </Backdrop>
        )
    }
}
export default Modal