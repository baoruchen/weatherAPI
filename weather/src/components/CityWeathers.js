import React from 'react';
import '../style.scss';
import ForcastList from './ForcastList';
import Axios from 'axios';

const city_name = 'Paris';
const api_key = 'a36d7084bc5e87cebfcf7d5763bbaff6';
const api=`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`;
class CityWeathers extends React.Component{
    constructor(){
        super();
        this.state={
            temp:'',
            humidity:'',
            wind:'',
            weather:'',
        }
       
    }
    async componentDidMount(){
        const {data:{list}} = await Axios.get(api);
        const weatherList = list[0];
        const temp = parseInt(weatherList.main.temp);
        const humidity = weatherList.main.humidity;
        const wind = weatherList.wind.speed;
        const weather = weatherList.weather[0].main.toUpperCase();
       

        this.setState({
            temp,
            humidity,
            wind,
            weather,
        })

    }

    render(){
        
    return <>   
        
        <div className="cityWeather__container">
            <div className="cityWeather__background">
                <div className="cityWeather__weather">
                    <p className="cityWeather__degree">{this.state.temp}°</p>
                    <p className="cityWeather__situation">{this.state.weather}</p>
                    <div className="cityWeather__supplement">
                        <div className="cityWeather__humidity">
                            <p>HUMIDITY</p>
                            <p>{this.state.humidity}%</p>
                        </div>
                        <hr></hr>
                        <div className="cityWeather__wind">
                            <p>WIND</p>
                            <p>{this.state.wind} KM</p>
                        </div>
                    </div>
                </div>
                <div className="cityWeather__city">
                    <div className="cityWeather__cityName">PARIS
                    <div className="underline"></div>
                    </div>
                    
                </div>
                
            </div>
            <ForcastList />
        </div>
       
        </>
    }
}
export default CityWeathers