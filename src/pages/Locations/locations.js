import React, { Component} from 'react';
import { connect } from "react-redux";

import { getRestaurants, addLocation } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import TableContainer from '../../components/Views/TableContainer';
import '../../styles/locations.scss';

class Locations extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getRestaurants();
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='locations'>
                <div className='table-top-row'>
                    <h2>Location</h2>
                    <AddBtn title='Location'/>
                </div>
                <TableContainer />             
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user,
            restaurants: state.restaurant,
            locations: state.locations,
    };
};

function mapDispatchToProps() {
    return {
        getRestaurants,
        addLocation
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Locations);
