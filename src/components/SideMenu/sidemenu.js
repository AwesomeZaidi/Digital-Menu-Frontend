
import React, { Component } from 'react';
import '../../styles/components/sidemenu.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SideMenu extends Component {
    render() {
        return (
            <div className='sidemenu'>
                <h4 className='welcome'>Welcome,<br></br>{this.props.user.firstName}</h4>
                <div className='settings-box'>Update<br></br>Profile</div>
                <div className='menu-line'></div>
                <div className='menu-options'>
                    <Link to='/dashboard'><div className='list-item'><div className='list-circle'></div>Dashboard</div></Link>
                    <div className='list-item'><div className='list-circle'></div><Link to='/dashboard'>Settings</Link></div>
                    <div className='list-item'><div className='list-circle'></div><Link to='/dashboard'>Support?</Link></div>
                    
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { restaurant: state.restaurant,
            user: state.user
    };
};
  
export default connect(mapStateToProps, null)(SideMenu);
  