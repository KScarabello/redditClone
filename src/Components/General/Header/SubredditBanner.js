import React, {Component} from 'react';
import axios from 'axios';

export default class SubredditBanner extends Component{
    constructor(props){
        super(props)

        this.state = {
            dropdownClicked: false,
            subreddits: []
        }

    }

    componentDidMount(){
        axios.get('http://www.reddit.com/subreddits.json')
            .then((res) => {
                console.log(res.data.data.children)
                this.setState({
                    subreddits: res.data.data.children
                })

            })
    }

    
    render(){

        
        
        return(
            <div className='subreddit-banner-container'>
                <div className='text my-subreddits'>
                    <p>MY SUBREDDITS</p>
                </div>
                <div className=' text subreddits-list'>
                    {
                        this.state.subreddits.map((subreddit) => {
                            console.log(subreddit.data)
                            return(
                                
                                <div>{' ' + subreddit.data.display_name.toUpperCase() + ' - '}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}