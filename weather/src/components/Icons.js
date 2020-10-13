import React from 'react';
import '../style.scss';



class Icons extends React.Component{
    constructor(props){
        super();
       
    }
    

    render(){
        return <>
            <div className="">
            {this.props.weather=="bolt" && <span className="weatherIcon bolt"><i class="fas fa-bolt"></i></span>}
            {this.props.weather=="wind" && <span className="weatherIcon wind"><i class="fas fa-wind"></i></span>}
            {this.props.weather=="smog" && <span className="weatherIcon smog"><i class="fas fa-smog"></i></span>}
            {this.props.weather=="cloud" && <span className="weatherIcon cloud"><i class="fas fa-cloud"></i></span>}
            {this.props.weather=="sun" && <span className="weatherIcon sun"><i class="fas fa-sun"></i></span>}
            {this.props.weather=="sun-rain" && <span className="weatherIcon sun-rain"><i class="fas fa-cloud-sun-rain"></i></span>}
            {this.props.weather=="cloud-sun" && <span className="weatherIcon cloud-sun"><i class="fas fa-cloud-sun"></i></span>}
            {this.props.weather=="rain" && <span className="weatherIcon cloud-rain"><i class="fas fa-cloud-rain"></i></span>}
            {this.props.weather=="snowflake" && <span className="weatherIcon snow-flake"><i class="far fa-snowflake"></i></span>}
            </div>   
        </>
    }
}
export default Icons