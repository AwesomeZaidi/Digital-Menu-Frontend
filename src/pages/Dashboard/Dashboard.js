import React, { Component} from 'react';
import { connect } from "react-redux";
// import { addRestaurant } from '../../redux/actions/index';
import '../../styles/menu.scss';
import { Redirect } from 'react-router';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state ={
            btnClicked: false
        }
    }
    // addLocation() {
    //     ;
    // };

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <section className='dashboard center'>
                <h2>{this.props.restaurant.restaurantName}</h2>
                <p className='content-medium menu-sentence'>Update your restaurant menu across different menus and locations all in one place.</p>
                
                <div className='menu-wrapper'>
                    <div className='location-section push-down'>
                        {this.state.btnClicked ?
                        <div class='form-group'>
                            <input class='loc-input' type='text' name='location' id='location' placeholder='Location'></input>
                        </div> : null}
                        {/* <p>246 McAllister St San Francisco CA</p>
                        <p className="active">246 McAllister St San Francisco CA</p>
                        <p>246 McAllister St San Francisco CA</p>
                        <p>246 McAllister St San Francisco CA</p>
                        <p>246 McAllister St San Francisco CA</p>
                        <p>246 McAllister St San Francisco CA</p> */}
                        <button onClick={() => this.setState({btnClicked: true})} className='loc-btn'>Add Location</button>
                    </div>

                    <div className='digital-menu push-down'>
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                            </tr>
                            <tr>
                                <td>Laughing Bacchus Winecellars</td>
                                <td>Yoshi Tannamuri</td>
                            </tr>
                            <tr>
                                <td>Magazzini Alimentari Riuniti</td>
                                <td>Giovanni Rovelli</td>
                            </tr>
                        </table>
                        <button className='menu-btn'>Add Item</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, restaurant: state.restaurant };
};

// function mapDispatchToProps() {
//     return {
//         addRestaurant
//     };
// };

export default connect(mapStateToProps, null)(Dashboard);
