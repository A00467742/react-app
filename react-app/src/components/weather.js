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

    apiKey = 'c275b4c891f173875fcdbec95d5f17e8';
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
                <h1> My Home Town is <span style={{ color: "green" }}>Ahmedabad, India!</span></h1>
                <img alt='Ahmedabad Town' src={townImg} height='250px' width='450px' />
                <p>Ahmedabad is a beautiful urban city located in Gujarat State of India. It is also heritage city.</p>
                <p>The main attraction and tourist places are Atal Pedestarian bridge, Gandhi Ashram, Alpha One Mall, Riverfront.</p>
                <div>
                    {this.state.weatherLogo ? <img alt='Weather' height='50px' src={this.state.weatherLogo}></img> : ''}
                    {this.state.weather ? <div> Current Temperature in Ahmedabad: {this.state.weather}
                        {this.state.unit === 'metric' ? ' Celsius' : ' Fahrenheit'}
                    </div> : ''}
                    {this.state.unit === 'metric' ?
                        <div>
                            <img alt='Celsius' className='weatherIconCss' onClick={() => { this.setStateData('metric') }} src={celc_s} />
                            <img alt='Fahrenheit' className='weatherIconCss' onClick={() => { this.setStateData('imperial') }} src={fahren_d} />
                        </div> :
                        <div>
                            <img alt='Celsius' className='weatherIconCss' onClick={() => { this.setStateData('metric') }} src={celc_d} />
                            <img alt='Fahrenheit' className='weatherIconCss' onClick={() => { this.setStateData('imperial') }} src={fahren_s} />
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default WeatherDetails;