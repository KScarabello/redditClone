import React, {Component} from 'react';
import SubredditBanner from './SubredditBanner.js';
import UserInfo from './UserInfo.js';

export default class Header extends Component{


    render(){

        const tabs = ['best', 'hot', 'new', 'rising', 'controversial', 'top', 'gilded', 'wiki']


        return(
            <div>
                <SubredditBanner />
                <div className='blue-bar'>
                    <div className='snoo-and-reddit-logo'>
                    </div>
                    <div className='blue-bar-nav'>
                        {
                            tabs.map((i) => {
                                return (
                                    <div className='tab'>
                                        {i}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <UserInfo />
                </div>
            </div>
        )
    }
}