import React, { Component} from 'react';
import HowItWorks from '../../components/HowItWorks';
import { Redirect } from 'react-router';
import "../../styles/home.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null
        };
    };

    handleRedirect(page) {
        this.setState({ page: page });
    };

    render() {


        // not sure why this doesn't work.
        // console.log(this.state.page === 'signup');
        
        // if (this.state.page) {
        //     <Redirect to={this.state.page}/>  
        // }
        
        return (
            <section className='home'>
                
                {/* TOP */}
                <div className='top'>
                    <div className='left-content section-side-padding'>
                        <h1 className='block__title'>Manage menus</h1>

                        <p className='block__paragraph'>Update the prices for all your online menues using our intuitive menu manager.</p>

                        <a href='/signup' className='block__btn'>Sign up</a>
                    </div>
                    
                    <div className='lower-logos align-items-center flexbox justify-content-center section-side-padding'>
                        <img src='./assets/images/doordash.png'></img>
                        <img src='./assets/images/grubhub.png'></img>
                        <img src='./assets/images/uber.png'></img>
                        <img src='./assets/images/yelp.png'></img>
                        <img src='./assets/images/postmates.png'></img>
                        <img src='./assets/images/opentable.png'></img>
                        <img src='./assets/images/google.png'></img>
                    </div>
                </div>

                {/* ADVANTAGE */}
                <div className='advantage-block flexbox justify-content-space-evenly section-padding'>
                    <div className='item'>
                        <p className='advantage-block__title'>Over 100 restaurants</p>
                        <p className='block__paragraph'>Take care of your menus easier than ever.</p>
                    </div>
                    <div className='item'>
                        <p className='advantage-block__title'>Convenient and easy</p>
                        <p className='block__paragraph'>Never login to another service to udpate the same things.</p>
                    </div>
                    <div className='item'>
                        <p className='advantage-block__title'>Keep customers happy</p>
                        <p className='block__paragraph'>Never again will customers see wrong prices listed.</p>
                    </div>
                </div>

                {/* HOW IT WORKS */}
                <HowItWorks />

            </section>
        );
    }
}

export default Home;