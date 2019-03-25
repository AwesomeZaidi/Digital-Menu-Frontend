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
            <section className='signup'>
            <h1>Join Digital Menu now</h1> 
            
            <form onSubmit={this.handleSubmit}>
                <legend>Sign up</legend>
                 <p>Now’s your chance to get your free digital menu. There’s no better way to connect all your digital menus,
                    never have wrong listed prices again, and bring in more business.
                 </p>

                 <h2>So what happens when you submit this form?</h2>
                 <ul>
                     <li>We’ll reach out to let you know if you’ve been selected.</li>
                     <li>If you get picked, we’ll collect more info to get things set up for you.</li>
                     <li>We’ll keep you posted about the program’s timeline and other details.</li>
                 </ul>
                 
                 <p>Even if you don’t get picked, you can still become an early adopter. You’ll be eligible for huge discounts and exclusive offers.</p>

                 <p>When we say free, we mean it — no signup fees, upfront costs, or anything like that. You really have nothing to lose.
                     Join now for your shot at all the benefits Anytime Link has to offer.
                 </p>
                
                 <h2>Personal information</h2>
                 <p>Tell us how to contact you. We respect your privacy and we’ll never sell, rent, lease or give away your information — ever.</p>

                 <label for='email'>Your email</label>
                 <input name='email' placeholder='name@domain.com'></input>

                 <label for='fullname'>Your full name</label>
                 <input name='fullname' placeholder='Carmen Caliente'></input>

                 <label for='position'>Your position</label>
                 <input name='position' placeholder='Position'></input>
                    
                 <label for='number'>Your contact phone</label>
                 <input name='number' placeholder='(123)-345-6789'></input>
                 <p>We may contact you between 11 AM and 5 PM Eastern</p>

                 {/* <h2>Restaurant information</h2>
                 <p>Tell us about your restaurant. No matter where you are we can make your menu digital and better.</p> */}

                 {/* <label for='number'>Your contact phone</label>
                 <input name='number' placeholder='(123)-345-6789'></input> */}
                 <button type='submit'>Join Digital Menu</button>
            </form>
     </section>
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


