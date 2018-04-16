import React, {Component} from 'react';
import Footer from '../General/Footer/Footer.js';
import axios from 'axios';


export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get('https://www.reddit.com/best.json')
            .then((res) => {
                this.setState({
                    posts: res.data.data.children
            })
        }) 
    }

    render(){        
        return( 
            <div className='home-container'>        
                {                   
                    this.state.posts.map((post, i) => {
                            return(
                                <div className='post-container'>
                                    <p>{Number(i) + 1}</p>
                                    <div className='post-text-container'>
                                        <div className='post-title-container'>
                                            <h1 className='post-title'>{post.data.title}</h1>
                                            <p>({post.data.domain})</p>
                                        </div>
                                        <div className='post-navigation-container'>
                                            <img src='' />
                                            <div className='post-info'>
                                                <p>submitted 8 hours ago by {post.data.author} to {post.data.subreddit_name_prefixed}</p>
                                                <div className='post-navigation'>
                                                    <p>comments</p>
                                                    <p>share</p>
                                                    <p>save</p>
                                                    <p>hide</p>
                                                    <p>report</p>
                                                </div>
                                            </div>
                                        </div>
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

