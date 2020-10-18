import React from 'react';
import '../style.scss';



class Loading extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        
       
    return <>  
        <div class="body">
            <div class="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div> 
        
       
        </>
    }
}
export default Loading