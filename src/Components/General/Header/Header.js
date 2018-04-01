import React, {Component} from 'react';
import SubredditBanner from './SubredditBanner.js';

export default class Header extends Component{


    render(){
        return(
            <div>
                <SubredditBanner />
                <div className='blue-bar'>
                    <div className='snoo-and-reddit-logo'>

                    </div>
                </div>
            </div>
        )
    }
}