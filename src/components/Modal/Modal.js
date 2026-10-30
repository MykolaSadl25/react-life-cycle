import styled from "styled-components";
export const Backdrop = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(98, 92, 95, 0.47);`

export const ModalWindow = styled.div`
background-color:white;
width: 400px;
height: 500px;
padding: 50px;
position: relative;
border-radius:10px;`

export const ModalForm = styled.form`
display:flex;
flex-direction:column;
gap: 15px;`

export const FormInputs = styled.input`
border: 1px solid grey;
border-radius:25px;
padding: 10px;`


export const CloseModal = styled.button`
padding: 10px;
background-color:lightblue;
border:none;
border-radius:25px;
position:absolute;
top:10px;
right: 10px;`

export const SendButton = styled.button`
padding: 10px;
background-color:lightblue;
border:none;
border-radius:25px;
`