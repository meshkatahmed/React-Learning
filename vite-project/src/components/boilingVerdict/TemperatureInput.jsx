import {Component} from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}
function TemperatureInput ({temperature,scale,onChange}) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} 
                onChange={(e)=>onChange(e,scale)}/>
        </fieldset>
    );        
}

export default TemperatureInput;
