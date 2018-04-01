import React, {Component} from 'react';

export default class UserInfo extends Component{
    constructor(props){
        super(props)


    }


    render(){
        return(
            <div className='userinfo-container'>
                username |
                <img src='../../Assets/sprite.png' className='message-icon' />
                | preferences |
                logout
            </div>
        )
    }
}