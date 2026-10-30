import { Component } from "react";

class Title extends Component{
    render(){
        return<>
              <h1>Hi {this.props.userName}!</h1>
              </>
    }
}

export default Title