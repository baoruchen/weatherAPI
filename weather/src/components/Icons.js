import React from 'react';
import '../style.scss';



class Icons extends React.Component{
    constructor(props){
        super();
       
    }
    

    render(){
        const url = `http://openweathermap.org/img/wn/${this.props.icons}@2x.png`;

       
        
        return <>
            <div className="">
                <img src={url} alt=""></img>
            {/* {this.props.weather==="bolt" && <span className="weatherIcon bolt"><i className="fas fa-bolt"></i></span>}
            {this.props.weather==="wind" && <span className="weatherIcon wind"><i className="fas fa-wind"></i></span>}
            {this.props.weather==="smog" && <span className="weatherIcon smog"><i className="fas fa-smog"></i></span>}
            {this.props.weather==="clouds" && <span className="weatherIcon cloud"><i className="fas fa-cloud"></i></span>}
            {this.props.weather==="sun" && <span className="weatherIcon sun"><i className="fas fa-sun"></i></span>}
            {this.props.weather==="sun-rain" && <span className="weatherIcon sun-rain"><i className="fas fa-cloud-sun-rain"></i></span>}
            {this.props.weather==="cloud-sun" && <span className="weatherIcon cloud-sun"><i className="fas fa-cloud-sun"></i></span>}
            {this.props.weather==="rain" && <span className="weatherIcon cloud-rain"><i className="fas fa-cloud-rain"></i></span>}
            {this.props.weather==="snowflake" && <span className="weatherIcon snow-flake"><i className="far fa-snowflake"></i></span>} */}
            </div>   
        </>
    }
}
export default Icons