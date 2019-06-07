import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class RestaurantTableContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: this.props.restaurants
        };
    };

    static getDerivedStateFromProps(props, state) {
        if (props.restaurants.length !== state.restaurants) {
            return {
                restaurants: props.restaurants,
            };
        };
    };
    // addRestaurantNow = (restaurant) => {
    //     let restaurants = this.state.restaurants;
    //     restaurants.unshift(restaurant);
    //     this.setState({
    //         restaurants: restaurants
    //     });
    // };

    render() {      
        return (
            <table className='container'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Locations</th>
                    </tr>
                    { this.props.restaurants ? 
                    // change the api later, instead this reverse way to save time for user.
                        this.props.restaurants.reverse().map(
                            (restaurant, _) => {                                
                                return (
                                    <tr key={'mykey' + restaurant._id}>
                                        <td>{restaurant.restaurantName}</td>
                                        {/* <td>{location.streetAddress}</td> */}
                                        <td>
                                            <p>{restaurant.locations.length} Locations</p>
                                            <Link to={`restaurant/${restaurant._id}/locations`}><button>View Locations</button></Link>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                        : null // maybe change the UI for this a little bit later.
                    }
                </tbody>
            </table>

        );
    };
};

// const mapStateToProps = state => {
//     return {
//         user: state.user,
//         // restaurants: state.restaurants
//     };
// };

  
export default connect(null, null)(RestaurantTableContainer);
  