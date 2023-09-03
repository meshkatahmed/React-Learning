import {Component} from 'react';
import TemperatureInput from './TemperatureInput';
import { convert,toCelsius,toFahrenheit } from '../../lib/converter';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends Component {
    state = {
        temperature: '',
        scale: '',
    };
    handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    }
    render() {
        const {temperature,scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature,toCelsius) 
        : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature,toFahrenheit) 
        : temperature;
        return (
            <div>
                <TemperatureInput temperature={celsius}
                    scale='c' onChange={this.handleChange}
                />
                <TemperatureInput temperature={fahrenheit} 
                    scale='f' onChange={this.handleChange}
                />
                <BoilingVerdict 
                    celsius={parseFloat(temperature)}
                />
            </div>
        );
    }
}