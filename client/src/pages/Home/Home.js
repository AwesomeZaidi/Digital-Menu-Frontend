import React, { Component} from 'react';
import "../../styles/home.scss";

class Home extends Component {
    // 🤔 probably don't need a state here.
    render() {
        return (
            <section className='home'>
                <div className='top'>
                    <div className='left-content'>
                        <h1 className='block__title'>Manage menues,<br></br>
                            in one place.
                        </h1>

                        <p className='block__paragraph'>Update the prices for all your online menues using our intuitive menu manager.</p>

                        <a className='block__btn'>Sign up</a>
                    </div>
                    <div className='lower-logos align-items-center flexbox justify-content-space-evenly'>
                        <img src='./assets/images/doordash.png'></img>
                        <img src='./assets/images/grubhub.png'></img>
                        <img src='./assets/images/uber.png'></img>
                        <img src='./assets/images/yelp.png'></img>
                        <img src='./assets/images/postmates.png'></img>
                        <img src='./assets/images/opentable.png'></img>
                        <img src='./assets/images/google.png'></img>
                    </div>
                </div>
                <div className='advantage-block flexbox justify-content-space-evenly'>
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
            </section>
        );
    }
}

export default Home;