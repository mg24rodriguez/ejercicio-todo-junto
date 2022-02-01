
import { Component } from "react";

class PersonalCard extends Component {

    constructor(props){
        super(props);   
        this.state = {
            val: this.props.age
        }
    }

    render(){
        return(
            <div>

                <h2> {this.props.firstName} {this.props.lastName} </h2>
                <p> Edad: {this.state.val} </p>
                <p> Color de cabello: {this.props.haircolor} </p>
                
                <button onClick = {this.subAge}> Restale años a {this.props.firstName} </button>
                <button onClick = {this.addAge}> Sumale años a {this.props.firstName} </button>
                
            </div>
        );
    
    }

    addAge = () => {
        const contador = this.state.val + 1;
        this.setState({val: contador})
    }

    subAge = () => {
        const contador = this.state.val - 1;
        this.setState({val: contador})
    }
}


export default PersonalCard;