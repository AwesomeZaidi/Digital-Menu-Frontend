import React, { Component} from 'react';
import HowItWorks from '../../components/HowItWorks';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { login } from '../../redux/actions/index';

import "../../styles/home.scss";
import '../../styles/components/login_modal.scss';
// import '../../utils/popupLogin.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };

    componentDidMount() {
        // Get the modal
        const modal = document.getElementById('myModal');

        // Get the button that opens the modal
        const loginBtn = document.getElementById("loginBtn");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        loginBtn.onclick = function() {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        };
    };

    handleRedirect(page) {
        this.setState({ page: page });
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    };

    handleLogin = e => {
        e.preventDefault();
        this.props.login(this.state);
    };

    render() {
        if (this.props.user) {
            console.log('found user on home render');
            return <Redirect to='/locations'/>
        };
        return (
            <section className='home'>    
                <div>
                        {/* <!-- The Modal --> */}
                        <div id="myModal" className="modal">
                            {/* <!-- Modal content --> */}
                            <div className="modal-content">
                                <span className="close">&times;</span>

                                <form className='login-form' onSubmit={this.handleLogin}>
                                    <p>{this.props.error}</p>
                                    <h4 className='content-section'>Login Form</h4>
                                    <div className='form-group'>
                                        <label htmlFor="email">Your email</label>
                                        <input id="email" type="email" name="email" placeholder="name@domain.com" value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="password">Your Password</label>
                                        <input id="password" type="password" name="password" placeholder="**********" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <button type='submit'>Login</button>
                                    <p>Don't have an account?</p>
                                </form>
                            </div>
                        </div>
                    </div>              
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

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

function mapDispatchToProps() {
    return {
        login
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);