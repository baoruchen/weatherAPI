import React from 'react';
import '../style.scss';

class Header extends React.Component{
    constructor(){
        super();
        const today = new Date();
        this.state={
            date:today.toDateString()
        }
    }
    

    render(){
        const {date} = this.state;
       
    return <>   
        
        <div className="nav__background">
            <div className="nav__today">
                <h4>{date}</h4>
            </div>
        </div>
       
        </>
    }
}
export default Header