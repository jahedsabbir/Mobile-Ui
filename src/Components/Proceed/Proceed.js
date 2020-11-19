import React from 'react';
import object3 from '../../images/object 3.png';
import './Proceed.css'
import { Link } from 'react-router-dom';
const Proceed = () => {
    return (
        <div className="container proceed mt-5 mb-5">
        <div className="row">
        <div className="proceed-header">
                <img src={object3} alt=""/>
            </div>
        </div>
        <div className="row">
            <div className="mt-3">
                <h4 style={{fontWeight:'bold',marginLeft:'10px'}}>LOGIN</h4>
               <form className="mobile-form" action="">
                   <label htmlFor="">Enter your mobile number</label>
                   <input type="phone" placeholder="+91|9876543210"/>
               </form>
            </div>
            <div className="mt-2">
                <h4 style={{fontWeight:'bold',marginLeft:'10px'}}>VERIFY OTP</h4>
               <form className="mobile-form" action="">
                   <label htmlFor="">OTP sent to 9876543210</label>
                   <input type="phone" placeholder='5   5   5   5    5    5' />
               </form>
            </div>
            <Link to='/home'>
            <div className="proceed-btn">
                   <h3 style={{paddingTop:'6px'}}>PROCEED</h3>
             </div>
             </Link>
        </div>
        </div>
    );
};

export default Proceed;