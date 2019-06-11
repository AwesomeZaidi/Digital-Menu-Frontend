import React, { Component} from 'react';
import { connect } from "react-redux";
// import { getRestaurantLocationItems, editItem, deleteItem } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import { getLocation, getItems } from '../../redux/actions/index';
// import { getRestaurantLocationItems, addItem } from '../../redux/actions/index';
import { Redirect } from 'react-router';
// import EditBtn from '../../components/Buttons/Edit';
import ItemsTable from '../../components/Views/ItemsTable';
import '../../styles/locations.scss';

class Items extends Component {

    componentWillMount = () => {
        this.props.getLocation(this.props.match.params.restaurantId, this.props.match.params.locationId);
        this.props.getItems(this.props.match.params.restaurantId, this.props.match.params.locationId);
    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='table-page'>
            <div className='table-top-row'>
                <div>
                    <Link to={`/restaurant/${this.props.restaurant._id}/locations`}>&lt; Back</Link>
                    <p className='table-header'>Update {this.props.location.locationName} Items</p>
                </div>
                <Link to={`/restaurant/${this.props.match.params.restaurantId}/location/${this.props.match.params.locationId}/`}>
                    <button className='btn_edit'>Edit Location Info</button>
                </Link>
            </div>
            <ItemsTable restaurantId={this.props.match.params.restaurantId} locationId={this.props.match.params.locationId}/>             
        </section>
        );
    };
};


const mapStateToProps = state => {
    return { user: state.user,
            restaurant: state.restaurant,
            location: state.location
    };
};

function mapDispatchToProps() {
    return {
        getLocation,
        getItems
        // addItem,
        // editItem,
        // removeItem
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Items);
