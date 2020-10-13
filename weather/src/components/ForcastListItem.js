import React from 'react';
import '../style.scss';
import Icons from './Icons';


class ForcastListItem extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        return <>
            <div className="forcastListItem__container">
                <div className="forcastList__Item">
                    <div className="forcastList__Week">MON</div>
                    <div className="forcastList__weatherImage" ><Icons weather="cloud"/></div>
                    <div className="forcastList__ItemDegree">15°</div>
                    <div className="forcastList__weather">CLOUDY</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">TUE</div>
                    <div className="forcastList__weatherImage" ><Icons weather="wind"/></div>
                    <div className="forcastList__ItemDegree">13°</div>
                    <div className="forcastList__weather">WIND</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">WED</div>
                    <div className="forcastList__weatherImage" ><Icons weather="sun"/></div>
                    <div className="forcastList__ItemDegree">21°</div>
                    <div className="forcastList__weather">SUN</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">THU</div>
                    <div className="forcastList__weatherImage" ><Icons weather="rain"/></div>
                    <div className="forcastList__ItemDegree">8°</div>
                    <div className="forcastList__weather">RAINY</div>
                </div>
                <div className="forcastList__Item">
                    <div className="forcastList__Week">FRI</div>
                    <div className="forcastList__weatherImage" ><Icons weather="snowflake"/></div>
                    <div className="forcastList__ItemDegree">-3°</div>
                    <div className="forcastList__weather">SNOW</div>
                </div>
                  
            </div>   
        </>
    }
}
export default ForcastListItem