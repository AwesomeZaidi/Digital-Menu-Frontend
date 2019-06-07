import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { addRestaurant } from '../../redux/actions/index';
import '../../styles/locations.scss';
import Lottie from 'lottie-react-web';
import loadAnimation from '../../assets/lotties/load.json';
import greenCheck from '../../assets/lotties/greenCheck.json';

class AddRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantName: '',
            loading: false,
            redirect: false,
            redirectUrl: ''
        };
    };

    validateForm() {
        return this.state.restaurantName.length > 0;
    };

    handleChange = (event) => {   
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });     
    };

    handleSubmit = async () => {
        this.setState({ loading: true });
        await this.props.addRestaurant(this.state);
        // this.props.addRestaurant(this.state).then(() => {
        this.setState({
            loading: 'done'
        });
        const restaurantUrl = `/restaurant/${this.props.restaurant._id}/locations`;
        setTimeout(() => {
            this.setState({
                redirect: true,
                redirectUrl: restaurantUrl   
            });
        }, 2000);
        // }).catch(() => {
        //     this.setState({ loading: 'error' });
        // });
        //TODO: pop up modal confirming location was created. Getting sent into location specific page.
    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        if (this.state.redirect === true) {
            return <Redirect to={this.state.redirectUrl}/>
        }
        return (
            <div className='table-page add-form'>
                    {/* <p>Hellooo {this.props.test}</p> */}
                    <p className='table-header'>Add Restaurant</p>
                <div>
                    <div className='form-inputs'>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='restaurantName'>Restaurant Name</label>
                                <input value={this.state.restaurantName} name='restaurantName' placeholder='Restaurant Name' onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'></div>
                        {
                            this.state.loading === false ?
                                <button onClick={this.handleSubmit} disabled={!this.validateForm()} className='btn_save'>
                                    Save Changes
                                </button>   
                            : this.state.loading === true ?
                                <button onClick={this.handleSubmit} className='btn_save'>
                                    <Lottie options={{
                                        animationData: loadAnimation,
                                        loop: 0
                                        }}/>
                                </button>
                            : this.state.loading === 'done' ?
                                <div>
                                    <button onClick={this.handleSubmit} className='btn_save_success'>
                                        <Lottie options={{
                                            animationData: greenCheck,
                                            loop: 0,
                                        }}/>
                                    </button>
                                </div>
                            : this.state.loading === 'error' ?
                                // change this error message later. 
                                <button onClick={this.handleSubmit} disabled={!this.validateForm()} className='btn_save'>
                                    There was a problem saving this, Try Refreshing the page or log out and login. <span role="img" aria-label='sad-face'>😕</span>
                                </button>
                            :
                                null
                        }         
                    </div>      

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        restaurant: state.restaurant

    };
};

function mapDispatchToProps() {
    return {
        addRestaurant
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(AddRestaurant);
