import React from 'react';
import '../style.scss';
import Axios from 'axios';

const city_name = 'Paris';
const api_key = 'a36d7084bc5e87cebfcf7d5763bbaff6';
const api=`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`;

class WeatherApi extends React.Component{
    constructor(){
        super();
        
    }

    async componentDidMount(){
        const {data:{list}} = await Axios.get(api);
    
        


    }


    render(){
        
        return <>
            
        </>
    }
}
export default WeatherApi