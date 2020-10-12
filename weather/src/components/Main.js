import React from 'react';
import '../style.scss';
import CityWeathers from './CityWeathers';

class Main extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        
       
    return <>   
        
        <div className="main__background">
        
            <div className="main__background--circle">
            </div>
            <CityWeathers />
         

        </div>
       
        </>
    }
}
export default Main