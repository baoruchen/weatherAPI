import React from 'react';
import '../style.scss';
import paris from '../image/paris.jpg'

class CityWeathers extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        
       
    return <>   
        
        <div className="cityWeather__container">
            <div className="cityWeather__background">
                <div className="cityWeather__weather">
                    <p className="cityWeather__degree">12°</p>
                    <p className="cityWeather__situation">CLOUDY</p>
                    <div className="cityWeather__supplement">
                        <div className="cityWeather__humidity">
                            <p>HUMIDITY</p>
                            <p>64%</p>
                        </div>
                        <hr></hr>
                        <div className="cityWeather__wind">
                            <p>WIND</p>
                            <p>12 KM</p>
                        </div>
                    </div>
                </div>
                <div className="cityWeather__city">
                    <p>PARIS
                    <div className="underline"></div>
                    </p>
                    
                </div>
                
            </div>
        </div>
       
        </>
    }
}
export default CityWeathers