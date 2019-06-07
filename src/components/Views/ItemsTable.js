import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddItem from '../AddItem';

class ItemsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowAdded: false,
            items: this.props.items
        };
    };

    addItemRow = (item) => {      
        let items = this.state.items;
        items.push(item);
        this.setState({
          items: items
        });
    };

    render() {
        return (
            <div>
                <AddItem addItemRow={this.addItemRow} locationId={this.props.locationId} restaurantId={this.props.restaurantId}/>
                <table className='container'>
                    <tbody>
                        <tr>
                            <th>Name*</th>
                            <th>Price*</th>
                            <th>Decription</th>
                        </tr>
                        { this.state.items !== 0 ?
                            this.state.items.reverse().map((item, _) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.itemName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        {/* <td>Unique URL Here <EditBtn /></td> */}
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
