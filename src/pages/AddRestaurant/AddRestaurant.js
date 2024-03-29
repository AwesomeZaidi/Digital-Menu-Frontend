// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { Redirect } from 'react-router';
// import { addRestaurant } from '../../redux/actions/index';

// class AddRestaurant extends Component { 
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             restaurantName: ''
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     };

//     handleChange = (event) => {   
//         this.setState({ [event.target.id]: event.target.value });     
//     };

//     validateForm() {
//         return this.state.restaurantName.length > 0 && this.state.zipOrPostalCode.length > 0 && this.state.streetAddress.length > 0 && this.state.city.length > 0;
//     };


//     handleSubmit = () => {
//         this.props.addRestaurant(this.state);
//     };

//     render() {
//         if (this.props.user && this.props.restaurant !== "") {
//             const url = `/restaurant/${this.props.restaurant._id}/locations`
//             return <Redirect to={url} />
//         }
//         if (!this.props.user) {
//             return <Redirect to='/signup' />
//         }
//         return (
//             <div>
//                 <div className='hero-section'>
//                     <h1 className='center'>Add your restaurant</h1>
//                 </div>
//                 <section className='add-restaurant form-wrapper'>                
//                     <div className='user-form' onSubmit={this.handleSubmit}>
//                         {/* <h2 className='content-section'>Sign up. Manage your menus.<br></br>Avoid issues.</h2> */}
//                         <h4 className='content-section'>Restaurant information</h4>
//                         <p className='content-section'>Add your restaurant information here to access the full Digital Menu.</p>
//                         <div className='push-down'></div>
//                         <div className="section-divider"></div>
//                         <div className='pad-down'></div>

//                         <div className='top-down-left'>
//                             <div className='form-group'>
//                                 <label htmlFor='restaurantName'>Restaurant name</label>
//                                 <input id='restaurantName' type='text' name='restaurantName' placeholder='Restaurant Name' value={this.state.restaurantName} onChange={this.handleChange}></input>
//                             </div>
//                             <p>We may contact you between 11 AM and 5 PM Eastern</p>
//                             <button onClick={this.handleSubmit}type='submit'>Add Restaurant</button>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return { user: state.user, restaurant: state.restaurant };
// };

// function mapDispatchToProps() {
//     return {
//         addRestaurant
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps())(AddRestaurant);


