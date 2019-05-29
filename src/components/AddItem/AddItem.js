import React, { Component } from 'react';
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
        };
        this.handleSubmitItem = this.handleSubmitItem.bind(this);
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

    handleSubmitItem = (e) => {
        e.preventDefault();
        // axios.post(`https://digitalmenu-intensive.herokuapp.com/restaurant/${this.props.restaurantId}/location/${this.props.locationId}/item`, this.state).then((res.data) => {
        // }).catch(cons)
        this.props.addNewItem(this.state);
    };

    render() {
        return (
            <form className='add-item_container'>
                <input name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                <input name='price' placeholder='Price' value={this.state.price} onChange={this.handleChange}/>
                <input name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange}/>
                <button onClick={this.handleSubmitItem} className='btn_primary' type='submit'>Add Item</button>
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


