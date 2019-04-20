import React, { Component } from 'react';
import '../../styles/components/navbar.scss';
import SideMenu from '../SideMenu/'
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/index';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <h1>Digital Menu</h1>
                    { this.props.user ?
                    <div>
                        <a class='cursor' onClick={this.props.logout}>Logout</a>
                    </div>
                    :       
                    <div>
                        {/* <!-- Trigger/Open The Modal --> */}
                        <a id="loginBtn">Login</a>
                        <a href='/signup'>Signup</a>
                    </div>
                    }
                </nav>
            </header>
        );
    };
};


const mapStateToProps = state => {
    return { user: state.user,
            restaurant: state.restaurant
    };
};
  
function mapDispatchToProps() {
    return {
        logout
    };
};
  
export default connect(mapStateToProps, {logout})(NavBar);
  