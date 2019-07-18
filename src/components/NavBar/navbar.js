import React, { Component } from 'react';
import '../../styles/components/navbar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/index';
import logo from '../../assets/logo.png';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>

                    <Link to='/'><img className='logo' src={logo} alt='Digital Menu'></img></Link>
                    { this.props.user ?
                    <div>
                        <p className='cursor' onClick={this.props.logout}>Logout</p>
                    </div>
                    :       
                    <div>
                        {/* <!-- Trigger/Open The Modal --> */}
                        <a className='cursor' id='loginBtn'>Login</a>
                        <Link className='signup' to='/signup'>Signup</Link>
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
  