import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import '../../styles/dashboard.scss';
import Lottie from 'lottie-react-web'
import setting from '../../assets/lotties/setting.json';
import help from '../../assets/lotties/help.json';


class Dashboard extends Component {
    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        };
        return (
            <div className='dashboard'>
                <h1 className='h1_primary'>Dashboard</h1>
                <div className='top-card'>
                    <div className='stats'>
                        <div className='left'>
                            <h2 className='stat-number'>{this.props.restaurants.length}</h2>
                            <h4>Restaurants</h4>
                        </div>
                        <div className='right'>
                            <h2 className='stat-number'>{this.props.locations.length}</h2>
                            <h4>Locations</h4>
                        </div>
                    </div>
                    <Link to='/restaurants' className='db-start-btn'>Go to Restaurants</Link>
                </div>

                <div className='bottom-row'>
                    <div className='bottom-card'>
                        <Lottie options={{
                            animationData: setting,
                            loop: true,
                            autoplay: true,
                        }}/>
                        <h2>Settings</h2>
                    </div>

                    <div className='bottom-card'>
                        <Lottie options={{
                            animationData: help,
                            loop: true,
                            autoplay: true,
                        }}/>
                        <h2>Need Help?</h2>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        restaurants: state.restaurants,
        locations: state.locations,
    };
};

export default connect(mapStateToProps, null)(Dashboard);

// Contents of this page?
// Title: Welcome to your Dashboard
// Quick stats on how many shops and how many locations, you can go to your restaurants page,
// and from there you can click into individuakl restaurant menus.
// Go to your restaurants.
// Making the UI decision that no restaurant will have a shit ton of restaurants only a few...ForkTsCheckerWebpackPlugin

