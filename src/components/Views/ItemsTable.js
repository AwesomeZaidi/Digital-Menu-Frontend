import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBtn from '../Buttons/Edit';
import AddItem from '../AddItem';

class ItemsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowAdded: false,
            items: this.props.items
        };
    };

    addNewItem = (item) => {
        let items = this.state.items;
        items.unshift(item)
        this.setState({
          items: items
        });
    };

    render() {
        console.log('this item:', this.props.items);
        
        return (
            <div>
                <AddItem addNewItem={this.addNewItem} />
                <table className='container'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Menu URL</th>
                        </tr>
                        { this.state.items !== 0 ?
                            this.state.items.map((item, index) => {
                                return (
                                    <tr key={item._id}>
                                        <td>Name whenever backend creates it.</td>
                                        <td>{item.restaurantLocation}</td>
                                        <td>Unique URL Here <EditBtn /></td>
                                    </tr>
                                  
                                )
                            })
                            : null // if there are no items
                        }
                        { this.state.rowAdded ? <tr><td contentEditable></td><td contentEditable></td></tr> : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.location,
        items: state.items
    };
};

export default connect(mapStateToProps, null)(ItemsTable);
