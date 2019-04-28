import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
// import { addItem } from '../../redux/actions/index';
import '../../styles/items.scss';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            description: '',
        }
        this.handleSubmitItem = this.handleSubmitItem.bind(this);
    }

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return this.state.name.length > 0 && this.state.price.length > 0;
    };

    handleSubmitItem(itemData) {
        e.preventDefault();
        axios.post(`https://digitalmenu-intensive.herokuapp.com/restaurant/${restaurantId}/location/${locationId}/item`, itemData);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitItem} className='add-item_container'>
                <input name='name' placeholder='Name'></input>
                <input name='price' placeholder='Price'></input>
                <input name='description' placeholder='Description'></input>
                <button className='btn_primary' type='submit'>Add Item</button>
            </form>
        );
    };
};

const mapStateToProps = state => {
    return { restaurant: state.restaurant };
};

// function mapDispatchToProps() {
//     return {
//         addItem
//     };
// };

export default connect(mapStateToProps, null)(AddItem);


