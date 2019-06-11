import React, { Component} from 'react';
import { connect } from "react-redux";
import { getRestaurant, getLocations, addLocation } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import LocationsTable from '../../components/Views/LocationsTable';
import '../../styles/locations.scss';
import { Link } from 'react-router-dom';

class Locations extends Component {

    componentDidMount = () => {
        this.props.getRestaurant(this.props.match.params.restaurantId);
        this.props.getLocations(this.props.match.params.restaurantId);
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='table-page'>
                <div className='table-top-row'>
                    <div>
                        <Link to='/restaurants'>&lt; Back</Link>
                        <p className='table-header'>Manage {this.props.restaurant.restaurantName} Locations</p>
                    </div>
                    <AddBtn url='/addLocation' title='Location'/>
                </div>
                <LocationsTable locations={this.props.locations}/>             
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user,
            restaurant: state.restaurant,
            locations: state.locations,
    };
};

function mapDispatchToProps() {
    return {
        getRestaurant,
        getLocations,
        addLocation
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Locations);
