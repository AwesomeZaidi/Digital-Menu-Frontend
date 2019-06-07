import React, { Component } from 'react';
import { connect } from "react-redux";
import { addItem } from '../../redux/actions/index';
import '../../styles/items.scss';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            price: '',
            description: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return this.state.itemName.length > 0 && this.state.price.length > 0;
    };

    handleSubmit = () => {
        this.props.addItem(this.state, this.props.restaurantId, this.props.locationId);
        this.props.addItemRow(this.state);
    };

    render() {
        return (
            <div className='add-item_container'>
                <input name='itemName' placeholder='Name' value={this.state.itemName} onChange={this.handleChange} />
                <input name='price' placeholder='Price' value={this.state.price} onChange={this.handleChange}/>
                <input name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} disabled={!this.validateForm()} className='btn_primary' type='submit'>Add Item</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        restaurant: state.restaurant
    };
};

function mapDispatchToProps() {
    return {
        addItem
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(AddItem);
