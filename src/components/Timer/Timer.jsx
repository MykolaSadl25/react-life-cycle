import { Component } from "react";
import { StopButton } from "./Timer";
let timerID = null

class Timer extends Component{
    state={
        time:0
    }
    componentDidMount(){
        timerID = setInterval(()=>{
            this.setState(prev=>({time:prev.time+1}))
        },1000)
    }

    componentWillUnmount(){
        clearInterval(timerID)
    }

    handleStopTimer = ()=>{
        clearInterval(timerID);
    }

    render(){
        return(
            <>
            <p>Time on this website:<span>{this.state.time}</span></p>
            <StopButton type="button" onClick={this.handleStopTimer}>Stop</StopButton>
            </>
        )
    }
}

export default Timer