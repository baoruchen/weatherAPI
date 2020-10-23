import React from 'react';
import '../style.scss';
import Axios from 'axios';

const city_name = 'Paris';
const weatherAPI = `http://127.0.0.1:6543/weathers?c=${city_name}`;

class WeatherApi extends React.Component{
    constructor(){
        super();
        this.state={
            data:'',
            whole:''
        }
    }

    async componentDidMount(){
        const {data} = await Axios.get(weatherAPI);
        this.setState({
            whole:data,
            data:data[0].main.temp,
        })
        
    }


    render(){
        console.log(this.state.data);
        console.log(this.state.whole);
        return <p>test</p>;
    }
}
export default WeatherApi