import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { signup } from '../../redux/actions/index';
// import logo from '../../Images/logo-only.png';

class Signup extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            fullName: '',
            email: '',
            position: '',
            number: '',
            password: ''
        };
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });      
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.fullName.length > 0 && this.state.position.length > 0 && this.state.number.length > 0;
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state);
    };  

    render() {
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                <div class='hero-section'>
                    <h1 class='center'>Join the Pilot Program now</h1>
                </div>
                <section className='signup form-wrapper'>                
                    <div class='user-form' onSubmit={this.handleSubmit}>
                        <h2 class='content-section'>Sign up. Manage your menus.<br></br>Avoid issues.</h2>
                        <p class='content-section'>Now’s your chance to get your free digital menu. There’s no better way to connect all your digital menus,
                            never have wrong listed prices again, and bring in more business.
                        </p>

                        <h4 class='content-section'>So what happens when you submit this form?</h4>
                        <ul class='content-section'>
                            <li class='content-section'>We’ll reach out to let you know if you’ve been selected.</li>
                            <li class='content-section'>If you get picked, we’ll collect more info to get things set up for you.</li>
                            <li class='content-section'>We’ll keep you posted about the program’s timeline and other details.</li>
                        </ul>
                        
                        <p class='content-medium'>Even if you don’t get picked, you can still become an early adopter. You’ll be eligible for huge discounts and exclusive offers.</p>

                        <p class='content-medium'>When we say free, we mean it — <strong>no signup fees, upfront costs, or anything like that.</strong> You really have nothing to lose.
                            Join now for your shot at all the benefits Anytime Link has to offer.
                        </p>
                            <div class='push-down'></div>
                            <div class="section-divider"></div>
                            <div class='pad-down'></div>
                            <h4 class='content-section'>Personal information</h4>
                            <p class='content-section'>Tell us how to contact you. We respect your privacy and we’ll never sell, rent, lease or give away your information — ever.</p>

                            <form class='top-down-left'>
                                <div class='form-group'>
                                    <label for='email'>Your email</label>
                                    <input name='email' placeholder='name@domain.com'></input>
                                </div>
                                
                                <div class='form-group'>
                                    <label for='fullname'>Your full name</label>
                                    <input name='fullname' placeholder='Carmen Caliente'></input>
                                </div>
                                <div class='form-group'>
                                    <label for='position'>Your position</label>
                                    <input name='position' placeholder='Position'></input>
                                </div>
                                <div class='form-group'>
                                    <label for='number'>Your contact phone</label>
                                    <input name='number' placeholder='(123)-345-6789'></input>
                                </div>

                                <p>We may contact you between 11 AM and 5 PM Eastern</p>

                                {/* <h2>Restaurant information</h2>
                                <p>Tell us about your restaurant. No matter where you are we can make your menu digital and better.</p> */}

                                {/* <label for='number'>Your contact phone</label>
                                <input name='number' placeholder='(123)-345-6789'></input> */}
                                <button type='submit'>Join Digital Menu</button>
                            </form>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps() {
    return {
        signup
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Signup);


