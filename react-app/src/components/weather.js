import { Component } from 'react'
import mildImg from '../assets/mild.png'
import coldImg from '../assets/cold.png'
import sunnyImg from '../assets/sunny.png'
import townImg from '../assets/ahmedabad.jpg'

import celc_d from '../assets/celc_d.jpg'
import celc_s from '../assets/celc_s.png'
import fahren_s from '../assets/fahren_s.png'
import fahren_d from '../assets/fahren_d.jpg'
class WeatherDetails extends Component {

    apiKey = '21146477cf5237a1a0160ffe66a16525';
    constructor() {
        super();
        this.state = {
            weather: '',
            weatherLogo: '',
            unit: 'metric'
        }
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.setStateData = this.setStateData.bind(this);
    }

    fetchWeatherData(unit = this.state.unit) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=23.0225&lon=72.5714&appid=' + this.apiKey + "&units=" + unit;
        fetch(url)
            .then(result => { return result.json() })
            .then(data => {
                console.log(data);
                if (data && data.main && data.main.temp) {

                    var tempDegree = data.main.temp;
                    var imageName = '';
                    if (unit === 'metric') {
                        if (tempDegree < 10) {
                            imageName = coldImg
                        }
                        else if (tempDegree > 20) {
                            imageName = sunnyImg
                        }
                        else {
                            imageName = mildImg
                        }
                    }
                    else {
                        if (tempDegree < 50) {
                            imageName = coldImg
                        }
                        else if (tempDegree > 68) {
                            imageName = sunnyImg
                        }
                        else {
                            imageName = mildImg
                        }
                    }

                    this.setState({
                        weather: tempDegree,
                        weatherLogo: imageName,
                        unit: unit
                    })
                }
            })
    }

    componentDidMount() {
        this.fetchWeatherData();
    }

    setStateData(unit) {
        this.fetchWeatherData(unit);
    }


    render() {

        // this.fetchWeatherData();
        return (
            <div>
                <h1> My Home Town is <b>Ahmedabad, India!</b></h1>
                <img src={townImg} height='250px' width='450px' />
                <div>
                    {this.state.weatherLogo ? <img height='50px' src={this.state.weatherLogo}></img> : ''}
                    {this.state.weather ? <div> Current Temperature in Ahmedabad: {this.state.weather}
                        {this.state.unit == 'metric' ? ' Degree' : ' Fahrenheit'}
                    </div> : ''}
                    {this.state.unit === 'metric' ?
                        <div>
                            <img className='weatherIconCss' onClick={() => { this.setStateData('metric') }} src={celc_s} />
                            <img className='weatherIconCss' onClick={() => { this.setStateData('imperial') }} src={fahren_d} />
                        </div> :
                        <div>
                            <img className='weatherIconCss' onClick={() => { this.setStateData('metric') }} src={celc_d} />
                            <img className='weatherIconCss' onClick={() => { this.setStateData('imperial') }} src={fahren_s} />
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default WeatherDetails;