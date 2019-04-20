import React, { Component} from 'react';
import { connect } from "react-redux";
import { addLocation } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import TableContainer from '../../components/Views/TableContainer';

class Locations extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if (!this.props.user) {
        //     return <Redirect to='/'/>
        // }
        return (
            <section className='locations'>
                <h2>Location</h2>
                <AddBtn title='Location'/>
                <TableContainer />             
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

export default connect(mapStateToProps, mapDispatchToProps())(Locations);
