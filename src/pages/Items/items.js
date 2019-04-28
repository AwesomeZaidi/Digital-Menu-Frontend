import React, { Component} from 'react';
import { connect } from "react-redux";
// import { getRestaurantLocationItems, addItem, editItem, deleteItem } from '../../redux/actions/index';
import { getRestaurantLocationItems } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import EditBtn from '../../components/Buttons/Edit';
import ItemsContainer from '../../components/Views/ItemsTable';
import '../../styles/locations.scss';

class Items extends Component {

    componentWillMount = () => {
        this.props.getRestaurantLocationItems(this.props.restaurant._id, this.props.match.params.locationId);
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='table-page'>
            <div className='table-top-row'>
                <p className='table-header'>Update Location {this.props.location.title} Items</p>
                <EditBtn title='Location Info'/> 
            </div>
            <ItemsContainer locations={this.props.locations}/>             
        </section>
        );
    }
}


const mapStateToProps = state => {
    return { user: state.user,
            restaurant: state.restaurant
    };
};

function mapDispatchToProps() {
    return {
        getRestaurantLocationItems,
        // addItem,
        // editItem,
        // removeItem
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Items);
