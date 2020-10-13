import React from 'react';
import '../style.scss';
import Icons from './Icons';
import Axios from 'axios';

const city_name = 'Paris';
const api_key = 'a36d7084bc5e87cebfcf7d5763bbaff6';
const api=`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`;

class ForcastListItem extends React.Component{
    constructor(){
        super();
        this.state={
            temperature:[],
            weather:[],
            icons:[],
        
        }
       
    }

    async componentDidMount(){
        const {data:{list}} = await Axios.get(api);
    
        let temperature = [];
        let weather = [];
        let icons = [];
        let list_array =[];
        let temp;
        let weatherType;
        let icon;
        for(let i=0; i<33;i++){
             list_array = list[i];
             temp = parseInt(list_array.main.temp);
             temperature.push(temp);
             weatherType = list_array.weather[0].main.toUpperCase();
             weather.push(weatherType);
             icon = list_array.weather[0].icon;
             icons.push(icon);
             i=i+7;
        }
     
  
       

        this.setState({
            temperature,
            weather,
            icons,
        
        })

    }


    render(){
        const {icons,temperature,weather} = this.state;
        return <>
            <div className="forcastListItem__container">
                <div className="forcastList__Item">
                    <div className="forcastList__Week">MON</div>
                    {icons[0]!==''  && <div className="forcastList__weatherImage" ><Icons icons={icons[0]} /></div>}
                    <div className="forcastList__ItemDegree">{temperature[0]}°</div>
                    <div className="forcastList__weather">{weather[0]}</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">TUE</div>
                    {icons[1]!==''  && <div className="forcastList__weatherImage" ><Icons icons={icons[1]} /></div>}
                    <div className="forcastList__ItemDegree">{temperature[1]}°</div>
                    <div className="forcastList__weather">{weather[1]}</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">WED</div>
                    <div className="forcastList__weatherImage" ><Icons icons="10d"/></div>
                    <div className="forcastList__ItemDegree">{temperature[2]}°</div>
                    <div className="forcastList__weather">{weather[2]}</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">THU</div>
                    <div className="forcastList__weatherImage" ><Icons icons="10d"/></div>
                    <div className="forcastList__ItemDegree">{temperature[3]}°</div>
                    <div className="forcastList__weather">{weather[3]}</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">FRI</div>
                    <div className="forcastList__weatherImage" ><Icons icons="10d"/></div>
                    <div className="forcastList__ItemDegree">{temperature[4]}°</div>
                    <div className="forcastList__weather">{weather[4]}</div>
                </div>
                  
            </div>   
        </>
    }
}
export default ForcastListItem