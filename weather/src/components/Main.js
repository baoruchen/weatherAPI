import React from 'react';
import '../style.scss';
import CityWeathers from './CityWeathers';
import Axios from 'axios';
import Loading from './Loading';


const city_name = 'Paris';
const weatherAPI = `http://127.0.0.1:6543/weathers?c=${city_name}`;



class Main extends React.Component{
    constructor(){
        super();
        this.state={
            data:'',
            isloading:false,
        
        }
       
    }
    
    async componentDidMount(){
        const {data} = await Axios.get(weatherAPI);
        this.setState({
            data,
            isloading:true,
        })

    }

    render(){
        const {data,isloading} = this.state;
        console.log(data);
        if(isloading){
            return <>   
        
        <div className="main__background">
        
            <div className="main__background--circle"></div>
           
            <CityWeathers data = {data}/>
            
        </div>
        
        </>

        }else{
            return <Loading />
        }   
       
    
    }
}
export default Main