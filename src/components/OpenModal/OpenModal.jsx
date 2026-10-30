import { Component } from "react";
import { ModalOpen } from "./OpenModal";
class OpenModal extends Component{
    render(){
        const {openModal} = this.props
        return(
            <>
            <ModalOpen type="button" onClick={openModal}>Open Modal</ModalOpen>
            </>
        )
    }
}

export default OpenModal