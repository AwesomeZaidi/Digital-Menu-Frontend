import React, { Component} from 'react';
import { connect } from "react-redux";
import { getRestaurantLocations, addLocation } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import TableContainer from '../../components/Views/TableContainer';
import '../../styles/locations.scss';

class Locations extends Component {

    componentDidMount = () => {
        this.props.getRestaurantLocations(this.props.restaurant._id);
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='table-page'>
                <div className='table-top-row'>
                    <p className='table-header'>Manage Locations</p>
                    <AddBtn url='addLocation' title='Location'/>
                </div>
                <TableContainer locations={this.props.locations}/>             
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
        getRestaurantLocations,
        addLocation
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Locations);
