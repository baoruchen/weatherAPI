import React from 'react';
import '../style.scss';
import Twitter from './Twitter';
import ForcastListItem from './ForcastListItem';


class ForcastList extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        return <>
            <div className="forcastList-container">
                  <Twitter />
                  <hr></hr>
                  <ForcastListItem />
            </div>   
        </>
    }
}
export default ForcastList