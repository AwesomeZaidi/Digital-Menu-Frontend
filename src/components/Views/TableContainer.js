import React, { Component } from 'react';
import '../../styles/components/views.scss';
import EditBtn from '../Buttons/Edit';
export default class Container extends Component {
    render() {
        return (
            <table class='container'>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Menu URL</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany <EditBtn /></td>
                </tr>
                
            </table>

        );
    }
}