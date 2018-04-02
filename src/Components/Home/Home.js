import React, {Component} from 'react';
import axios from 'axios';
import secret from '../../config.js';
import clientId from '../../config.js'
import state from '../../config.js';

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            subreddits: {}
        }
    }


    componentWillMount() {
        axios.get('https://www.reddit.com/api/v1/authorize?client_id=' + {clientId}+ '&response_type=code&state=' + {state} + '&redirect_uri=http://www.reddit.com&duration=temporary&scope=identity')
            .then((res) => {
                this.setState({
                    subreddits: res.data
                })

            })

    }

    render(){
        return(
            <div className='home-container'>
                {this.state.subreddits}
            </div>
        )
    }
}

