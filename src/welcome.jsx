import React, {Component} from 'react'

export default class TemperatureInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            scale: props.scale
        }
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }  

    render(){
        const scaleNames = {
            c: "celsius",
            f: "fahrenheit",
        }
        const {temperature} = this.props;
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="celsius">Temperature en {scaleNames[this.state.scale]} </label>
                    <input type="text" className="form-control" onChange={this.handleChange} 
                    value={temperature} />
                </div>
            </div>
        )
    }
}
