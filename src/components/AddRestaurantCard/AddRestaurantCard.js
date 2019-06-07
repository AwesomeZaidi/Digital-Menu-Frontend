import React, { Component } from 'react';
import '../../styles/restaurants.scss';

class AddRestaurantCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantName: '',
        };
    };

    handleChange = (event) => {   
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });     
    };

    validateForm() {
        return this.state.name.length > 0 && this.state.price.length > 0;
    };

    render() {
        return (
            <div className='add_container rest-top-sect'>
                <input className='rest-input'name='restaurantName' placeholder='Restaurant Name' value={this.state.restaurantName} onChange={this.handleChange} />
                <button className='rest-add' onClick={() => this.props.addRestaurantRow(this.state)} className='btn_primary' type='submit'>Add Restaurant</button>
            </div>
        );
    };
};

export default AddRestaurantCard;
