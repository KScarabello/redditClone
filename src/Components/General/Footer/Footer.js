import React from 'react';

const Footer = () => {
    
        return(
            <div className='footer-container'>
                <div className='footer-nav-box'>
                    <div>
                        <ul> about
                            <li>blog</li>
                            <li>about</li>
                            <li>advertise</li>
                            <li>careers</li>
                        </ul>
                        <ul> help
                            <li>site rules</li>
                            <li>Reddit help center</li>
                            <li>wiki</li>
                            <li>reddiquette</li>
                            <li>mod guidelines</li>
                            <li>contact us</li>
                        </ul>
                        <ul> apps & tools
                            <li>Reddit for iPhone</li>
                            <li>Reddit for Android</li>
                            <li>mobile website</li>
                            <li>buttons</li>
                        </ul>
                        <ul> heart
                            <li>reddit gold</li>
                            <li>redditgifts</li>
                        </ul>
                    </div>                
                </div>
                <p>Use of this site constitutes acceptance of our <span>User Agreement</span> and <span>Privacy Policy</span>. 2018 reddit inc. All rights reserved.</p>
                <p>REDDIT and the ALIEN Logo are registered trademakrs of reddit inc.</p>
            </div>
        )    
}

export default Footer