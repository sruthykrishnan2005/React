import { Component } from "react";



class Sample1 extends Component{
    constructor(){
        super()
        this.state={color:'red',width:'200px'}
    }
    render(){
        return(
            <h2>Sample1 {this.state.color}{this.state.width}</h2>
        )
    }
}
export default Sample1