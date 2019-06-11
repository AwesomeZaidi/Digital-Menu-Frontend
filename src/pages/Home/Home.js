import React, { Component} from 'react';
import HowItWorks from '../../components/HowItWorks';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { login, clearError } from '../../redux/actions/index';
import excel from '../../assets/excel2.jpg';
import demo from '../../assets/demo.png';
import Footer from '../../components/Footer';
import "../../styles/home.scss";
import '../../styles/components/login_modal.scss';
// import '../../utils/popupLogin.js';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showDemo: false
        };
    };

    componentDidMount() {
        if (this.props.user) {
            return <Redirect to='/dashboard'/>
        }
        this.props.clearError(false);

        const modal = document.getElementById('myModal'); // Get the modal
        const loginBtn = document.getElementById("loginBtn"); // Get the button that opens the modal
        const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

        // When user clicks button, open modal 
        loginBtn.onclick = function() {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            };
        };

        // Fade in animations
        setTimeout(() => {
            this.setState({                
                showDemo: true
            })
        }, 2100);
    };

    validateForm() {
        return this.state.email.length > 0 &&
        this.state.password.length > 0
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
        return (
            <>
            <section className='home'>    
                <div>
                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modal">
                        {/* <!-- Modal content --> */}
                        <div className="modal-content">
                            <span className="close">&times;</span>

                            <form className='login-form' onSubmit={this.handleLogin}>
                                <h4 className='content-section'>Login Form</h4>
                                {this.props.error === true ? <p className='p_error'><strong>Wrong email or password</strong></p> : <p>no err</p> }
                                <div className='form-group'>
                                    <label htmlFor="email">Your email</label>
                                    <input id="email" type="email" name="email" placeholder="name@domain.com" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Your Password</label>
                                    <input id="password" type="password" name="password" placeholder="**********" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <button disabled={!this.validateForm()} type='submit'>Login</button>
                                <p>Don't have an account?</p>
                            </form>
                        </div>
                    </div>
                </div>              
                {/* TOP */}
                <div className='top'>
                        {/* <h1 className='block__title'>Goodbye<br></br>Excel Sheets</h1> */}
                        <div>
                            {this.state.showDemo === true ?
                            <>
                                <Typed 
                                    className='block__title'
                                    strings={['Hello, Digital Menu']} 
                                    typeSpeed={40} 
                                />
                                <Fade left>
                                    <img className='blur-img'src={demo}></img>
                                </Fade>
                            </>
                            :
                            <>
                                <Typed 
                                    className='block__title'
                                    strings={['Goodbye, Excel Sheets', 'Hello Digital Menu']} 
                                    typeSpeed={40} 
                                />
                                {/* <Fade right> */}
                                    <img className='blur-img'src={excel}></img>
                                {/* </Fade> */}
                            </>
                        }
                        </div>  
                        <div className='slogan-section'>
                            {this.state.showDemo ? 
                                <p className='slogan'>
                                    Manage all your restaurants locations menus in one place.
                                </p>                            
                            : null}
                        </div>
                        <center>
                            <Link to='/signup' className='block__btn landing-btn'>Sign up</Link>
                            <a href='#advantage-block' className='block__btn landing-btn'>Learn More</a>
                        </center>
                    
                    <div className='lower-logos align-items-center flexbox justify-content-center section-side-padding'>
                        <img src='./assets/images/doordash.png' alt='pic'></img>
                        <img src='./assets/images/grubhub.png' alt='pic'></img>
                        <img src='./assets/images/uber.png' alt='pic'></img>
                        <img src='./assets/images/yelp.png' alt='pic'></img>
                        <img src='./assets/images/postmates.png' alt='pic'></img>
                        <img src='./assets/images/opentable.png' alt='pic'></img>
                        <img src='./assets/images/google.png' alt='pic'></img>
                    </div>
                </div>


                {/* ADVANTAGE */}
                <div id='advantage-block' className='advantage-block flexbox justify-content-space-evenly section-padding'>
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
            <Footer/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        error: state.error
    };
};

function mapDispatchToProps() {
    return {
        login,
        clearError
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);