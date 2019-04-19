import React, { Component } from 'react';
import { logout } from '../../redux/actions/index';
import { connect } from 'react-redux';

class Nav extends Component {

  render() {
    return (
      <header className='header'>
        <div className='header__content' >
          <div className='header__left'>
            <a href='/'><h1>Digital Menu</h1></a>
          </div>
          <div className='header__right'>
            <nav className='header-nav align-items-center'>
              <a>Contact</a>
              { this.props.user ?
                <div>
                  <a href='/dashboard'>Dashboard</a>
                  <a href='/settings'>Settings</a>
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
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps() {
  return {
      logout
  };
};


export default connect(mapStateToProps, {logout})(Nav);
