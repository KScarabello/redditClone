import React, {Component} from 'react';
import Footer from '../General/Footer/Footer.js';
import axios from 'axios';


export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            subreddits: []
        }
    }


    componentDidMount() {
        axios.get('https://www.reddit.com/best.json')
            .then((res) => {
                this.setState({
                    subreddits: res.data.data.children
            })
        }) 
    }

    render(){        
        return( 
            <div className='home-container'>        
                {                   
                    this.state.subreddits.map((post, i) => {
                            return(
                                <div className='post-container'>
                                    <h1>{post.data.i}</h1>
                                    <div className='post-text-container'>
                                        <h1 className='post-title'>{post.data.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    
            
                }   
                <Footer />         
            </div>        
                
        )
    }
}

