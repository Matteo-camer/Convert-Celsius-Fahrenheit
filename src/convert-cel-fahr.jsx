import React, { Component } from 'react'
import BoilingVerdict from "./home"
import TemperatureInput from "./welcome"

export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            scale: "c",
            temperature: 20
        }
    }

    toCelsius = (fahrenheit) =>{
        return (fahrenheit - 32) * 5 / 9;
    }
    toFahrenheit = (celsius) =>{
        return (celsius * 9 / 5) + 32
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            scale: "c",
            temperature
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: "f",
            temperature
        })
    }
 
    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === "c" ? temperature : this.toCelsius(temperature);
        const fahrenheit = scale ==="f" ? temperature : this.toFahrenheit(celsius);
        return (
            <div className="container mt-4">
                    <TemperatureInput scale="c" temperature={celsius} onTemperatureChange = {this.handleCelsiusChange} />
                    <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange= {this.handleFahrenheitChange} />   
                    <BoilingVerdict celsius={celsius} />
            </div>
        )
    }
}
