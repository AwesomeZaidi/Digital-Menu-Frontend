import React from "react";
const Nav = () => (
  <header className='header hedaer-wrapper'>
    <div className='header__content' >
      <div className='header__left'>
        <h1>Digital Menu</h1>
      </div>
      <div className='header__right'>
        <nav className='header-nav align-items-center'>
          <a href='/login'>Login</a>
          <a href='/signup'>Signup</a>
          <a href='contact'>Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

{/* <img className='logo' src='./assets/logo.png'></img> */}

export default Nav;
