import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBtn from '../Buttons/Edit';
import AddItem from '../AddItem';

class ItemsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowAdded: false,
            items: []
        };
    };

    addItem = () => {
        console.log('here');
        const tbody = document.getElementsByTagName('tbody');
        console.log('tbody:', tbody);        
        const row = `
            <tr>
            <td contentEditable></td>
            <td contentEditable></td>
            </tr>`;
        console.log('row:', row);
        
        // tbody.innerHTML += row;

        this.setState = ({
            rowAdded: true
        });
    };

    render() {   
        return (
            <div>
                <AddItem/>
                <table className='container'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Menu URL</th>
                        </tr>
                        { this.props.locations ? 
                            this.props.locations.map (
                                (location, index) => {
                                    return (
                                        <tr key={'mykey' + index}>
                                            <td>Name whenever backend creates it.</td>
                                            <td>{location.restaurantLocation}</td>
                                            <td>Unique URL Here <EditBtn /></td>
                                        </tr>
                                    )
                                }
                            )
                            : null
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
        location: state.location
    };
};

export default connect(mapStateToProps, null)(ItemsTable);
