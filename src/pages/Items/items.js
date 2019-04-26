import React, { Component} from 'react';
import { connect } from "react-redux";
import { getRestaurantLocationItems, addItem, editItem, deleteItem } from '../../redux/actions/index';
import { Redirect } from 'react-router';
import AddBtn from '../../components/Buttons/Add';
import ItemsContainer from '../../components/Views/ItemsContainer';
import '../../styles/locations.scss';

class Items extends Component {

    componentDidMount = () => {
        this.props.getRestaurantLocationItems(this.props.location._id);
    }

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='items'>
            <div className='table-top-row'>
                <p class='table-header'>Update Location {this.props.location.title} Items</p>
                <AddBtn title='Location'/> 
            </div>
            <ItemsContainer locations={this.props.locations}/>             
        </section>
        );
    }
}


const mapStateToProps = state => {
    return { user: state.user,
            restaurant: state.restaurant,
            location: state.location,
    };
};

function mapDispatchToProps() {
    return {
        getRestaurantLocationItems,
        addItem,
        editItem,
        removeItem
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Items);
