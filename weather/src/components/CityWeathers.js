import React from 'react';
import '../style.scss';
import ForcastList from './ForcastList';



// const city_name = 'Paris';
// const api_key = 'a36d7084bc5e87cebfcf7d5763bbaff6';
// const api=`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`;
class CityWeathers extends React.Component{
    constructor(props){
        super(props);
        
       
    }
   

    render(){
        
    return <>   
        
        <div className="cityWeather__container">
            <div className="cityWeather__background">
                <div className="cityWeather__weather">
                    <p className="cityWeather__degree">{parseInt(this.props.data[0].main.temp)}°</p>
                    <p className="cityWeather__situation">{this.props.data[0].weather[0].main.toUpperCase()}</p>
                    <div className="cityWeather__supplement">
                        <div className="cityWeather__humidity">
                            <p>HUMIDITY</p>
                            <p>{this.props.data[0].main.humidity}%</p>
                        </div>
                        <hr></hr>
                        <div className="cityWeather__wind">
                            <p>WIND</p>
                            <p>{this.props.data[0].wind.speed} KM</p>
                        </div>
                    </div>
                </div>
                <div className="cityWeather__city">
                    <div className="cityWeather__cityName">PARIS
                    <div className="underline"></div>
                    </div>
                    
                </div>
                
            </div>
            <ForcastList data={this.props.data}/>
        </div>
       
        </>
    }
}
export default CityWeathers