import { Component } from "react";
import { Backdrop,ModalWindow,CloseModal,ModalForm,FormInputs,SendButton } from "./Modal";
class Modal extends Component{
    
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
    
    render(){
        const {closeModal}=this.props;
        return(
            <Backdrop onClick={this.handleCloseOnBackdrop}>
                <ModalWindow>
                    <ModalForm>
                        <CloseModal onClick={closeModal}>X</CloseModal>
                        <FormInputs type="text" placeholder="enter some details"/>
                        <FormInputs type="text" placeholder="enter some details"/>
                        <FormInputs type="text" placeholder="enter some details"/>
                        <SendButton>Send</SendButton>
                    </ModalForm>
                </ModalWindow>
            </Backdrop>
        )
    }
}
export default Modal