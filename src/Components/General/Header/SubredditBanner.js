import React, {Component} from 'react';

export default class SubredditBanner extends Component{
    constructor(props){
        super(props)

        this.state = {
            dropdownClicked: false
        }

    }

    
    render(){

        const subreddits = ['childfree', 'orchids', 'bipolar', 'iama', 'nature', 'earthporn', 'utah', 'violinist', 'webdev', 'workout', 'lorem', 'ipsum', 'charlie', 'kilo', 'alpha', 'limo', 'tango', 'wine', 'california', 'travel', 'movies']
        
        return(
            <div className='subreddit-banner-container'>
                <div className='text my-subreddits'>
                    <p>MY SUBREDDITS</p>
                </div>
                <div className=' text subreddits-list'>
                    {
                        subreddits.map((subreddit) => {
                            return(
                                <div>{' ' + subreddit.toUpperCase() + ' - '}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}