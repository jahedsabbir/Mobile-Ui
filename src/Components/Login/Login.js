import React from 'react';
import object2 from '../../images/object 2.png';
import mobile from '../../images/icon _mobile.png';
import fb from '../../images/icon _fb.png';
import google from '../../images/icon _google.png';
import mail from '../../images/icon _mail.png'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container login mt-5 mb-5">
        <div className="row">
            <div className="login-header">
                <img src={object2} alt=""/>
            </div>
         </div>
         <div className="row">
             <h2 style={{fontWeight:'bold',marginLeft:'10px'}}>Login</h2>
               
               <Link to='/proceed'>
                   <div className="login-page-btn">
                    <img src={mobile} className="social-logo" alt=""/>
                   <h6 style={{paddingTop:'8px'}}>Enter your Mobile</h6>
                </div>
                </Link> 
                <Link to='/proceed'>
                <div className="login-page-btn">
                    <img src={fb} className="social-logo" alt=""/>
                   <h6 style={{paddingTop:'8px'}}>Continue With Facebook</h6>
                </div>
                </Link>
                <Link to='/proceed'>
                <div className="login-page-btn">
                    <img src={google} className="social-logo" alt=""/>
                   <h6 style={{paddingTop:'8px'}}>Continue With Google</h6>
                </div>
                </Link>
                <Link to='/proceed'>
                <div className="login-page-btn">
                    <img src={mail} className="social-logo" alt=""/>
                   <h6 style={{paddingTop:'8px'}}>Continue With Email</h6>
                </div>
                </Link>
         </div>
         <div className="row">
             <p style={{margin:'30px 35px'}}>By Countinuing, You Agree To Our <br/> terms Of Service & Privacy Policy</p>
         </div>
         </div>
    );
};

export default Login;