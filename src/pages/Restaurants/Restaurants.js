import React, { Component} from 'react';
import { connect } from "react-redux";
import { getRestaurants, addRestaurant } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import TableContainer from '../../components/Views/RestaurantTableContainer';
import '../../styles/restaurants.scss';

class Restaurants extends Component {

    componentDidMount = () => {
        this.props.getRestaurants();
    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='table-page'>
                <div className='table-top-row'>
                    <p className='table-header'>Manage Restaurants</p>
                    <AddBtn url='addRestaurant' title='Restaurant'/>
                </div>
                <TableContainer restaurants={this.props.restaurants}/>         
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user,
            restaurants: state.restaurants
    };
};

function mapDispatchToProps() {
    return {
        getRestaurants,
        addRestaurant
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Restaurants);
