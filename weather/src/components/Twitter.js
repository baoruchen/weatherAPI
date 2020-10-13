import React from 'react';
import '../style.scss';
import UserIcon from '../image/user-circle-regular.svg'


class Twitter extends React.Component{
    constructor(){
        super();
       
    }
    

    render(){
        return <>
            <div className="twitter-container">
                <div className="twitter-title">
                    <span><i className="fab fa-twitter-square"></i></span>   
                    Twitter Post
                </div>
                <div className="twitter-post">
                    <div className="twitter-postContent">
                        <img src={UserIcon} alt="users' image" className="twitter-userImage"/>
                        <p className="twitter-context">Today's weather is very nice.</p>
                    </div>
                    <div className="twitter-postContent">
                        <img src={UserIcon} alt="users' image" className="twitter-userImage"/>
                        <p className="twitter-context">Today's weather is very nice.</p>
                    </div>
                </div>
                  
            </div>   
        </>
    }
}
export default Twitter