import React from 'react';
import '../style.scss';
import CityWeathers from './CityWeathers';
import Icon from './Icons';

class Main extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        
       
    return <>   
        
        <div className="main__background">
        
            <div className="main__background--circle"></div>
            <CityWeathers />
            <Icon />
         

        </div>
       
        </>
    }
}
export default Main