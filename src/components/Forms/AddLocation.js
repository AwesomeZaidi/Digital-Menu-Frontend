import React, { Component } from 'react';

export default class AddLocation extends Component {
    render() {

        return (
            <div class='add-form'>
                <form>
                    <legend>Add Location</legend>

                    <input placeholder='Name'></input>
                    <input placeholder='Street Address'></input>
                    <input placeholder='Zipcode'></input>
                    <input placeholder='State'></input>
                    <input placeholder='Country'></input>
                    <input placeholder='Contact Number'></input>  

                    <button>Add Location</button>                  
                </form>
            </div>
        );
    }
}