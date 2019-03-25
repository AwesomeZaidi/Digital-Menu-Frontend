import React, { Component} from 'react';
import HowItWorks from '../../components/HowItWorks';
import Advantage from '../../components/Advantage';

import "../../styles/home.scss";

class Home extends Component {
    // 🤔 probably don't need a state here.
    render() {
        return (
            <section className='home'>
                <div className='top'>
                    <div className='left-content section-side-padding'>
                        <h1 className='__title'>Manage menus</h1>

                        <p className='__paragraph'>Update the prices for all your online menues using our intuitive menu manager.</p>

                        <a className='__btn'>Sign up</a>
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
                <Advantage />
                <HowItWorks />
            </section>
        );
    }
}

export default Home;