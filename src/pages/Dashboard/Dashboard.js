import React, { Component} from 'react';
import { connect } from "react-redux";
import { addLocation } from '../../redux/actions/index';
import '../../styles/menu.scss';
import { Redirect } from 'react-router';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantLocation: '',
            food: [{
                item: "",
                price: ""
            },
            {
                item: "",
                price: ""
            }],
        };
        this.addLocation = this.addLocation.bind(this);
    }

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return this.state.restaurantLocation.length > 0;
    };

    async addLocation() {
        await this.props.addLocation(this.props.restaurant._id, this.state);
        this.forceUpdate();
    };

    addrow() {
        const tbody = document.getElementById('tbody');
        const row = `
            <tr>
            <td contentEditable></td>
            <td contentEditable></td>
            </tr>`;

        tbody.innerHTML += row;
        
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='dashboard center'>
                <h2>{this.props.restaurant.restaurantName}</h2>
                <p className='content-medium menu-sentence'>Update your restaurant menu across different menus and locations all in one place.</p>
                
                <div className='menu-wrapper'>
                    <div className='location-section push-down'>
                        <div className='form-group'>
                            <input className='loc-input' type='text' name='restaurantLocation' id='restaurantLocation' placeholder='Location' onChange={this.handleChange}></input>
                        </div>
                        <button onClick={this.addLocation} className='loc-btn'>Add Location</button>
                        {this.props.locations ? 
                            this.props.locations.map(
                                (location, index) => {
                                    return (<p key={'mykey' + index}>{location.restaurantLocation}</p>)
                                }
                            )
                        : null
                        }
                    </div>

                    <div className='digital-menu push-down'>
                        <table>
                        <tbody id='tbody'>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                            {this.state.food.map((value, index) => (
                                <tr>
                                    <td contentEditable>{value.item}</td>
                                    <td contentEditable>{value.price}</td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr> */}
                            {/* <tr>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr> */}
                          </tbody>
                        </table>
                        <button onClick={() => this.setState({food: [...this.state.food, {item: "", price:""}]})}className='menu-btn'>Add Item</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, restaurant: state.restaurant, locations: state.locations, item: state.items };
};

function mapDispatchToProps() {
    return {
        addLocation
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
