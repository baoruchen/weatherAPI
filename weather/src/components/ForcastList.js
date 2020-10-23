import React from 'react';
import '../style.scss';
import Twitter from './Twitter';
import ForcastListItem from './ForcastListItem';


class ForcastList extends React.Component{
    constructor(props){
        super(props);
       
    }
    

    render(){
        return <>
        
            <div className="forcastList-container">
                  <Twitter />
                  <hr></hr>
                  <ForcastListItem data = {this.props.data}/>
            </div>   
       
        </>
    }
}
export default ForcastList