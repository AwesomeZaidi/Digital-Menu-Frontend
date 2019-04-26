import React, { Component } from 'react';
import '../../styles/components/navbar.scss';
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
                        <p className='cursor' onClick={this.props.logout}>Logout</p>
                    </div>
                    :       
                    <div>
                        {/* <!-- Trigger/Open The Modal --> */}
                        <button className='cursor' id='loginBtn'>Login</button>
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
  
export default connect(mapStateToProps, mapDispatchToProps())(NavBar);
  