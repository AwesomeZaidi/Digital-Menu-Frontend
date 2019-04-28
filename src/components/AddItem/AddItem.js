import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/items.scss';

export default class AddItem extends Component {
    render() {
        return (
            <form className='add-item_container'>
                <input name='name' placeholder='Name'></input>
                <input name='price' placeholder='Price'></input>
                <input name='description' placeholder='Description'></input>
                <button className='btn_primary'>Add Item</button>
            </form>
        );
    }
}